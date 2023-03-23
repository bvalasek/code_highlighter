import './App.css';
import CodeBlock from './components/CodeBlock'


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
      <CodeBlock codeString={codeString} />
    </div>
  );
}

export default App;
