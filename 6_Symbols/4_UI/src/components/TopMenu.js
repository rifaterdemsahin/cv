import React, { useState } from 'react';
import './TopMenu.css';

const menuData = {
    "🚀 Core Files": {
        "📄 README.md": "./markdown/README.md",
        "🤖 gemini.md": "./markdown/gemini.md",
        "🧭 cursor.md": "./markdown/cursor.md"
    },
    "📂 CV Versions": {
        "v19 - HPC Engineer": "./4_UI/dynamic_cv/v19/",
        "v17 - AI Engineer": "./4_UI/dynamic_cv/v17/",
        "v16 - DevOps Engineer": "./4_UI/dynamic_cv/v16/"
    },
    "💻 Code & Data": {
        "🚀 Dynamic CV Generator": "./6_Symbols/4_UI/public/index.html",
        "⚛️ React Application Source": "./6_Symbols/4_UI/",
        "📄 Source CV Data": "./6_Symbols/2_Data/",
        "📊 Deployed CV Data": "./6_Symbols/4_UI/public/data/",
        "✍️ Markdown Tools": "./6_Symbols/3_BusinessLayer/"
    },
    "🛠️ Scripts & Formulas": {
        "📜 Initialization Scripts": "./6_Symbols/1_Init/",
        "🧪 CV Generation Formulas": "./5_Formula/"
    },
    "📦 Node & React": {
        "🚀 GitHub Pages Deployment": "./markdown/github_pages_deployment.md",
        "🤔 How GitHub Pages Runs React": "./markdown/github_pages_react_deployment_explained.md",
        "⚛️ React Explanation": "./markdown/react_explanation.md",
        "📦 NPM on Mac": "./markdown/npm_on_mac_install.md",
        "▶️ NPM Run": "./markdown/NPM_RUN.MD",
        "❌ Node Build Fail": "./markdown/first_github_actions_node_fails.md",
        "❌ Initial Start Error": "./markdown/initial_start_error.md",
        "❌ Load Error": "./markdown/load_error.md",
        "❌ React Error Fix": "./markdown/react_error_fix.md"
    },
    "🗂️ Other Directories": {
        "🎯 1_Real": "./1_Real/",
        "🗺️ 2_Journey": "./2_Journey/",
        "🌳 3_Environment": "./3_Environment/",
        "🤔 7_Semblance": "./7_Semblance/"
    }
};

const TopMenu = ({ onOpenFile }) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMenuLeave = () => {
        setActiveMenu(null);
    };

    return (
        <nav className="top-menu" onMouseLeave={handleMenuLeave}>
            <div className="menu-items-left">
                {Object.keys(menuData).map(title => (
                    <div 
                        key={title} 
                        className="menu-item" 
                        onMouseEnter={() => handleMenuEnter(title)}
                    >
                        <span>{title}</span>
                        {activeMenu === title && (
                            <div className="dropdown">
                                {Object.keys(menuData[title]).map(linkText => {
                                    const fileUrl = menuData[title][linkText];
                                    if (fileUrl.endsWith('.md')) {
                                        return (
                                            <button key={linkText} onClick={() => onOpenFile(fileUrl)}>
                                                {linkText}
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <a key={linkText} href={fileUrl} target="_blank" rel="noopener noreferrer">
                                                {linkText}
                                            </a>
                                        );
                                    }
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="menu-items-right">
                <a href="https://github.com/rifaterdemsahin/cv/actions" target="_blank" rel="noopener noreferrer" className="repo-link">
                    🚀 Actions
                </a>
                <a href="https://github.com/rifaterdemsahin/cv" target="_blank" rel="noopener noreferrer" className="repo-link">
                    ⭐ GitHub Repo
                </a>
            </div>
        </nav>
    );
};

export default TopMenu;
