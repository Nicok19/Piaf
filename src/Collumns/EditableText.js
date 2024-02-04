import React, { useState } from 'react';

function EditableDiv() {
    const defaultText = 'Tasks';
    const [text, setText] = useState(defaultText);

    const handleH1Click = () => {
        const h1Element = document.getElementById('editableText');
        h1Element.contentEditable = true;
        h1Element.focus();
        
        if (text === defaultText) {
            setText('');
        }
    };

    const handleBlur = () => {
        const h1Element = document.getElementById('editableText');
        h1Element.contentEditable = false;
        const newText = h1Element.innerText.trim();
        
        if (newText.length === 0) {
            setText(defaultText); 
        } else {
            setText(newText);
        }
    };

    return (
        <div className='phaderEditableText'>
            <h3 id="editableText" onClick={handleH1Click} onBlur={handleBlur}>{text}</h3>
        </div>
    );
}

export default EditableDiv;

