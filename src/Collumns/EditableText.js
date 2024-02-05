import React, { useState } from 'react';

const EditableDiv = () => {
    const defaultText = 'Tasks';
    const [text, setText] = useState(defaultText);

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleFocus = () => {
        if (text === defaultText) {
            setText('');
        }
    };

    const handleBlur = () => {
        if (text.trim() === '') {
            setText(defaultText);
        }
    };

    return (
        <div id='editableText'>
            <input
                value={text}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Write something..."
            />
        </div>
    );
};

export default EditableDiv;



