import React, { useState, useEffect } from 'react';

function App() {
    const [jobPrompt, setJobPrompt] = useState('');
    const [generatedCv, setGeneratedCv] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

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

    return (
        <div>
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
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                {generatedCv && (
                    <div className="cv-container">
                        <h2>Generated CV</h2>
                        <div dangerouslySetInnerHTML={{ __html: generatedCv }} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;