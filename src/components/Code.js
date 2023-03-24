import React, { useEffect } from "react";
import Prism from 'prismjs';

// Library
// https://prismjs.com/
// video 
// https://www.youtube.com/watch?v=G33s06Pzc2c
// Theme generator:
// http://k88hudson.github.io/syntax-highlighting-theme-generator/www/

// ten pre-wrap in-line style override na Pre a Code si vycital odtialto,
// ak by si to nemal na Code tak v pripade, ze nezomrazujes Line Numbers
// tak wrap by nefungoval, takze si to dal aj na Code
// https://github.com/PrismJS/prism/issues/3419

export default function Code({ code, language, dataLines }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div className="Code">
            <h2> Code Syntax Block {language}</h2>
            <pre className="line-numbers" data-line={dataLines} style={{ whiteSpace: 'pre-wrap', }}>
                <code className={`language-${language}`} style={{ whiteSpace: 'pre-wrap', }}>{code}</code>
            </pre>
        </div>
    );
}