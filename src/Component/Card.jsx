import React from 'react'
import GeminiCall from '../Custon Hook/GeminiCall'

function Card({ cardPrompt, cardIcon }) {

    const gemini = GeminiCall()

    const clickGemini = () => {
        gemini(cardPrompt)
    }

    return (
        <div onClick={clickGemini}>
            <div className='cardPrompt'>
                <p>{cardPrompt}</p>
            </div>
            <div className='icon'>
                <img src={cardIcon} alt="" />
            </div>
        </div>
    )
}

export default Card
