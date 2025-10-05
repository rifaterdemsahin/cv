import React, { useState } from 'react';
import './TopMenu.css';

const menuData = {
    "🚀 Core Files": {
        "1. Personal Info": "./markdown/1_personal_info.md",
        "2. Skills": "./markdown/2_skills.md",
        "3. Work Experience": "./markdown/3_work_experience.md",
        "4. Education": "./markdown/4_education.md",
        "5. Projects": "./markdown/5_projects.md",
        "6. Certifications": "./markdown/6_certifications.md",
        "7. Additional Info": "./markdown/7_additional_info.md",
        "8. Niche": "./markdown/8_niche.md"
    },
    "📂 CV Versions": {
        "v19 - HPC Engineer": "./4_UI/dynamic_cv/v19/",
        "v17 - AI Engineer": "./4_UI/dynamic_cv/v17/",
        "v16 - DevOps Engineer": "./4_UI/dynamic_cv/v16/"
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
                <a href="https://youtu.be/pUf8wGV2NBU" target="_blank" rel="noopener noreferrer" className="repo-link">
                    ▶️ Watch Video
                </a>
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
