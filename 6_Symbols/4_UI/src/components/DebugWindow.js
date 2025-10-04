import React from 'react';
import './DebugWindow.css';

const DebugWindow = ({ logs }) => {
    return (
        <div className="debug-window">
            <div className="debug-header">Debug Log</div>
            <div className="debug-content">
                {logs.map((log, index) => (
                    <div key={index} className="log-message">{log}</div>
                ))}
            </div>
        </div>
    );
};

export default DebugWindow;
