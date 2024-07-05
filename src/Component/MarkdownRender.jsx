import React, { useEffect } from 'react'
import markdownToHtml from '../Custon Hook/markdownToHtml'
import copy from '../Custon Hook/copy'
import HTMLReactParser from 'html-react-parser/lib/index'

const MarkdownRenderer = ({ MarkdownContent }) => {
    const htmlContent = markdownToHtml(MarkdownContent)

    useEffect(() => {
        const handelCopyClick = (event) => {
            const copyButton = event.target.closest('.copyButton');
            if (copyButton) {
                const codeElement = copyButton.closest('.codeCopy').querySelector('pre');
                if (codeElement) {
                    const code = codeElement.innerText;
                    copy(code, event)
                }
            }
        }

        document.body.addEventListener('click', handelCopyClick);

        return () => {
            document.body.removeEventListener('click', handelCopyClick)
        }
    }, [MarkdownContent])

    return <div>{HTMLReactParser(htmlContent)}</div>
}

export default MarkdownRenderer;
