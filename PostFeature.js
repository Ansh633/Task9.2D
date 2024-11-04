import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const PostFeature = () => {
  const [code, setCode] = useState('// Write your code here');
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="post-feature">
      <h2>Post a Question</h2>
      <div>
        <h3>Code</h3>
        <CodeMirror
          value={code}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            setCode(value);
          }}
        />
      </div>
      <div>
        <h3>Markdown</h3>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write in markdown..."
        />
      </div>
      <div>
        <h3>Preview</h3>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostFeature;
