import './App.css';
import Code from './components/Code';
import CodeBlock from './components/CodeBlock';
// import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import 'prismjs/plugins/toolbar/prism-toolbar.js';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
import "./prism/prism.css";
import "./prism/prism-theme-k88hudson.css";
import Loop_through_range from './playgrounds/Loop_through_range';
import Loop_through_datetime_rande from './playgrounds/Loop_through_datetime_rande';
import List_records_with_times_between_groups from './playgrounds/List_records_with_times_between_groups';
import List_groups_with_break_groups from './playgrounds/List_groups_with_break_groups';
import ListGroup_Ateempt_6 from './playgrounds/ListGroup_Ateempt_6';
import ListGroup_Atempt_8 from './playgrounds/ListGroup_Atempt_8';

// Google Maps for React
// import GoogleMapReact from 'google-map-react';

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
};

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
      {/* <ListGroup_Atempt_8 /> */}
      {/* <ListGroup_Ateempt_6 /> */}
      {/* <List_groups_with_break_groups /> */}
      {/* <List_records_with_times_between_groups /> */}
      {/* <Loop_through_datetime_rande /> */}
      {/* <Loop_through_range /> */}
      {/* <CodeBlock codeString={codeString} />  */}
      {/* <div class="mapouter"><div class="gmap_canvas"><iframe width="770" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=klokockuv mlyn&t=&z=8&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br /><style>.mapouter{position:relative;text-align:right;height:510px;width:770px;}</style><a href="https://embedgooglemap.2yu.co">html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:510px;width:770px;}</style></div></div> */}
      {/* <div style={{ width: '100%', height: '200px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20677.808759630763!2d14.883010272973525!3d49.62176827926839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c8eb001f55ea3%3A0x39a2c25efcfe943a!2sNa%C4%8Deradec%20300%2C%20257%2065%20Na%C4%8Deradec!5e0!3m2!1sen!2scz!4v1680548515622!5m2!1sen!2scz"
          width="100%"
          height="300"
          style={{ border: 0 }}
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div> */}

      {/* check also https://meyerweb.com/eric/tools/css/reset/ */}
      <Code code={JSCode} dataLines={'2 - 4,6-7'} language="javascript" />
      <Code code={htmlCode} dataLines={'2'} language="html" />
    </div>
  );
}

export default App;
