import React, { useState } from 'react';
import TopMenu from './components/TopMenu';
import MarkdownViewer from './components/MarkdownViewer';

function App() {
    const [jobPrompt, setJobPrompt] = useState('');
    const [generatedCv, setGeneratedCv] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [markdownFile, setMarkdownFile] = useState(null);

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
        setLoading(true);
        setError('');
        setGeneratedCv('');

        try {
            const markdownContents = await Promise.all(
                markdownFiles.map(file =>
                    fetch(`/data/${file}`).then(res => {
                        if (!res.ok) {
                            throw new Error(`Could not fetch ${file}`);
                        }
                        return res.text();
                    })
                )
            );

            const markdownData = markdownFiles.reduce((acc, file, index) => {
                acc[file] = markdownContents[index];
                return acc;
            }, {});

            const response = await fetch('https://n8n.rifaterdemsahin.com/webhook/cv', {
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
                throw new Error('Failed to generate CV. Please check the n8n workflow.');
            }

            const cvHtml = await response.text();
            setGeneratedCv(cvHtml);

        } catch (err) {
            setError(err.message);
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
        <div>
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
        </div>
    );
}

export default App;