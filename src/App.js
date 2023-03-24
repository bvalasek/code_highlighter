import './App.css';
import Code from './components/Code';
import CodeBlock from './components/CodeBlock';
// import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
import "./prism/prism.css";
import "./prism/prism-theme-k88hudson.css";
// import './prism/synthwave84.css'

//Component Code.js
const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;

const htmlCode = `
    <div>
      <h1> PrismJS Tutorial </h1>
      <p>
      Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
      </p>
    </div>
`;

//Component CodeBlock.js
function App() {
  const codeString = `
  import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ codeString }) => {
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
`
  return (
    <div className="App">
      <h6>lorem</h6>
      {/* <CodeBlock codeString={codeString} /> */}
      <Code code={JSCode} dataLines={'2 - 6'} language="javascript" />
      <Code code={htmlCode} dataLines={'2'} language="html" />
    </div>
  );
}

export default App;
