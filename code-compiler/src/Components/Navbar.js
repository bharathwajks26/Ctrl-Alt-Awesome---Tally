import React from 'react';
import Select from 'react-select';
import './Navbar.css';

const Navbar = ({ userLang, setUserLang, userTheme, setUserTheme, fontSize, setFontSize }) => {
    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
    ];
    const themes = [
        { value: "hc-black", label: "Dark" },
        { value: "light", label: "Light" },
    ];

    // Find the selected language and theme object from the array for the default value
    const selectedLang = languages.find(lang => lang.value === userLang);
    const selectedTheme = themes.find(theme => theme.value === userTheme);

    return (
        <div className="Navbar">
            <h1>Ctrl+Alt+Awesome Code Compiler</h1>
            <Select
                options={languages}
                value={selectedLang}
                onChange={(e) => setUserLang(e.value)}
                placeholder={userLang.label}
            />
            <Select
                options={themes}
                value={selectedTheme}
                onChange={(e) => setUserTheme(e.value)}
                placeholder={userTheme.label}
            />
            <label>Font Size</label>
            <input
                type="range"
                min="18"
                max="30"
                value={fontSize}
                step="2"
                onChange={(e) => setFontSize(e.target.value)}
            />
        </div>
    );
};

export default Navbar;
