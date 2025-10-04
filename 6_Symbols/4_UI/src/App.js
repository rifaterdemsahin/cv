import React, { useState } from 'react';
import TopMenu from './components/TopMenu';
import MarkdownViewer from './components/MarkdownViewer';
import DebugWindow from './components/DebugWindow';

function App() {
    const [jobPrompt, setJobPrompt] = useState('');
    const [generatedCv, setGeneratedCv] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [markdownFile, setMarkdownFile] = useState(null);
    const [debugLog, setDebugLog] = useState([]);

    const log = (message) => {
        setDebugLog(prevLog => [...prevLog, `[${new Date().toLocaleTimeString()}] ${message}`]);
    };

    const handleOpenFile = (fileUrl) => {
        setMarkdownFile(fileUrl);
    };

    const handleCloseFile = () => {
        setMarkdownFile(null);
    };

    const markdownFiles = [
        '1_personal_info.md',
        '2_skills.md',
        '3_work_experience.md',
        '4_education.md',
        '5_projects.md',
        '6_certifications.md',
        '7_additional_info.md',
        '8_niche.md'
    ];

    const generateCv = async () => {
        setDebugLog([]); // Clear log on new run
        log('Starting CV generation...');
        setLoading(true);
        setError('');
        setGeneratedCv('');

        try {
            log('Fetching markdown data files...');
            const markdownContents = await Promise.all(
                markdownFiles.map(file =>
                    fetch(`${process.env.PUBLIC_URL}/data/${file}`).then(res => {
                        if (!res.ok) {
                            throw new Error(`Could not fetch ${res.url}`);
                        }
                        return res.text();
                    })
                )
            );
            log('Data loaded successfully. Logging content preview:');
            const markdownData = markdownFiles.reduce((acc, file, index) => {
                const content = markdownContents[index];
                log(`- ${file}: "${content.substring(0, 50).replace(/\n/g, ' ')}..."`);
                acc[file] = content;
                return acc;
            }, {});

            log('All data logged. Ready to be pushed.');

            log('Sending data to backend service...');
            const webhookUrl = 'https://n8n.rifaterdemsahin.com/webhook/24ba00ca-e972-4cd5-8911-54acb2f7803a';
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: jobPrompt,
                    markdown_files: markdownData,
                }),
            });

            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`Error ${response.status} from ${webhookUrl}: ${response.statusText}. ${errorBody}`);
            }

            log('Received response from backend.');
            const cvHtml = await response.text();
            setGeneratedCv(cvHtml);
            log('CV generation complete.');

        } catch (err) {
            setError(err.message);
            log(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const sampleJob = `AI +SDLC | Short-Term Contract Opportunity (Oct–Dec)
Hi Erdem,

I’m reaching out from a company called Instinct. We're working with one of our clients in the technical apprenticeship space who has a unique contract opportunity that could be a great fit given your background in AI and software engineering.

We’re looking for a Programmer/Engineer with strong experience in:
Implementing AI within the SDLC 
Building and delivering live technical products 
Industry-standard programming languages (e.g., Python, Java, C#, JavaScript) 
Designing technical, instructor-led content 
Instructional design experience 
(Bonus: experience leading or managing dev teams) 

🗓 Contract Dates: Oct 15 – Dec 15
💼 Scope of Work: Create and QA sync/async technical training content based on a provided module outline. This includes workshop content, skills applications, and LMS migration.
💰 Rate: Circa £350/day (approx. 32 working days

If this aligns with your expertise and availability, I’d love to set up a quick chat to share more. 

Let me know if you're interested, along with your contact number and a suitable time to speak!

Marcy White
Learning Delivery Manager at Instinct Resourcing`;

    const fillWithSampleJob = () => {
        setJobPrompt(sampleJob);
    };

    return (
        <div className="app-container">
            <TopMenu onOpenFile={handleOpenFile} />
            <div className="header">
                <h1>Dynamic CV Generator</h1>
            </div>
            <div className="container">
                <textarea
                    value={jobPrompt}
                    onChange={(e) => setJobPrompt(e.target.value)}
                    placeholder="Enter the job description or prompt here..."
                />
                <button onClick={generateCv} disabled={loading}>
                    {loading ? 'Generating...' : 'Generate CV'}
                </button>
                <button onClick={fillWithSampleJob}>Fill with Sample Job</button>
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                {generatedCv && (
                    <div className="cv-container">
                        <h2>Generated CV</h2>
                        <div dangerouslySetInnerHTML={{ __html: generatedCv }} />
                    </div>
                )}
            </div>
            <MarkdownViewer fileUrl={markdownFile} onClose={handleCloseFile} />
            <DebugWindow logs={debugLog} />
        </div>
    );
}

export default App;