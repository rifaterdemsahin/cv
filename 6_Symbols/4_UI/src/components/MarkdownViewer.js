import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownViewer.css';

const MarkdownViewer = ({ fileUrl, onClose }) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        if (fileUrl) {
            fetch(fileUrl)
                .then(response => response.text())
                .then(text => setMarkdown(text))
                .catch(error => console.error('Error fetching markdown:', error));
        }
    }, [fileUrl]);

    if (!fileUrl) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownViewer;
