
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// great article, your goal is to use highlighter but also have ability 
// to subhighlight important section. What I mean by sections 
// they can be seen in new react documentation. There is full source code
// for single file which already has syntax highliter applied and on top
// of it there are parts of codes extra hilghlighted so opticaly user knows to visually  attract attention on section
// https://www.makeuseof.com/react-syntax-highlighting-code-block/

const CodeBlock = ({ codeString }) => {
    return (
        <SyntaxHighlighter
            language="javascript"
            style={docco}
            showLineNumbers
            showInlineLineNumbers
        >
            {codeString}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;