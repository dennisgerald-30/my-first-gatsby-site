import * as React from 'react'
import '../styles/codeblock.scss'

function CodeBlock(props) {
    const copyText = (e) => {
        const copyText = e.target.nextElementSibling
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
    }

    return (
        <div className="code-block">
            <span className="code-block__copy" onClick={copyText} role="button" tabIndex={0} onKeyPress={copyText}>COPY</span>
            <textarea readOnly={true}>{props.children}</textarea>
        </div>
    );
}

export default CodeBlock