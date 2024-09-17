import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUppercase = () => {
        setText(text.toUpperCase());
    };

    const handleLowercase = () => {
        setText(text.toLowerCase());
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className="h2 text-center">Enter the text to {props.title}</div>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        className="form-control"
                        id="textarea"
                        rows="3"
                        value={text}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-success" onClick={handleUppercase}>Convert To Uppercase</button>
                <button type="button" className="btn btn-success m-3" onClick={handleLowercase}>Convert To Lowercase</button>
            </div>
            <div class="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <h2>Preview. </h2>
                <p>{text}</p>
            </div>
        </>
    );
}
