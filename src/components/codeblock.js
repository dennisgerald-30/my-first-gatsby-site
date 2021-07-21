import * as React from 'react'

function CodeBlock(props) {
    function copyText(e) {
        console.log(e);
    }
    return (
        <div className="code-block">
            <span className="code-block__copy" onClick={copyText}>COPY</span>
            {props.children}
        </div>
    );
}

export default CodeBlock