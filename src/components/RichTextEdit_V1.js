import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const RichTextEdit_V1 = ({ }) => {
    const [text, setText] = React.useState('');

    return (
        <div style={{ display: "flex" }} >
            <div className="editor" >
                <CKEditor
                    editor={ClassicEditor}
                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setText(data);
                    }}
                />
            </div>
            <div>
                <h1>Content</h1>
                <p>{text}</p>
            </div>
        </ div>
    )
};

export default RichTextEdit_V1;
