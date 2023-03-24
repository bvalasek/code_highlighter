import React, { useEffect } from "react";
import Prism from 'prismjs';

// Library
// https://prismjs.com/
// video 
// https://www.youtube.com/watch?v=G33s06Pzc2c
// Theme generator:
// http://k88hudson.github.io/syntax-highlighting-theme-generator/www/

export default function Code({ code, language, dataLines }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div className="Code">
            <h2> Code Syntax Block {language}</h2>
            <pre className="line-numbers" data-line={dataLines} >
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
}