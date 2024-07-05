import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import { useSelector } from 'react-redux'
import MarkdownRenderer from './MarkdownRender'
import GeminiCall from '../Custon Hook/GeminiCall'
import copy from '../Custon Hook/copy'


function QNA() {
    const { recentPrompt, geminiResponse } = useSelector((state) => state.prompts)
    const [speaking, setspeaking] = useState(false)
    const [respones, setRespones] = useState("")
    const [complateResponse, setComplatedResponse] = useState(false)
    const GeminiRef = useRef("")
    const QNARef = useRef("")
    const gemini = GeminiCall()

    const speak = () => {
        if (window.speechSynthesis) {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel()
                setspeaking(false)
                return;
            }
            const utterance = new SpeechSynthesisUtterance(GeminiRef.current.innerText)
            window.speechSynthesis.speak(utterance)
            setspeaking(true)
        } else {
            alert(`Your browser does not support text-to-speech`)
        }
    }

    const refresh = () => {
        setRespones("")
        gemini(recentPrompt)
    }

    useEffect(() => {
        setRespones("")
        setComplatedResponse(false)

        const responesArr = geminiResponse.split(" ");
        let timeoutIds = [];
        for (let i = 0; i < responesArr.length; i++) {
            const timeoutId = setTimeout(() => {
                setRespones((prev) => `${prev}${responesArr[i]} `)
                if (i === responesArr.length - 1 && i !== 0) {
                    setComplatedResponse(true)
                }
                QNARef.current.scrollTop = QNARef.current.scrollHeight
            }, i * 100)
            timeoutIds.push(timeoutId)
        }

        return () => {
            timeoutIds.forEach(timeoutId => clearTimeout(timeoutId))
        }
    }, [geminiResponse])

    return (
        <>
            <div className='QNA' ref={QNARef}>
                <div className='User'>
                    <div>
                        <p>{recentPrompt}</p>
                        <img src={assets.user_icon} alt="" />

                    </div>
                </div>
                <div className='GeminiAI'>
                    <img src={assets.gemini_icon} alt="" />
                    <div ref={GeminiRef} className='geminiResponse'>
                        <MarkdownRenderer MarkdownContent={respones} />
                    </div>
                    {complateResponse &&

                        <div className='responsefeatures'>
                            <img
                                src={speaking ? assets.stop_icon : assets.Speaker_Icon}
                                alt=""
                                onClick={speak}
                            />
                            <img
                                src={assets.copy_icon}
                                alt=""
                                onClick={(e) => copy(GeminiRef.current.innerText, e)}
                                className='copy'
                            />
                            <img
                                src={assets.refresh_icon}
                                alt=""
                                onClick={refresh}
                            />
                        </div>
                    }
                </div>
            </div >
        </>
    )
}

export default QNA
