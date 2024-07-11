import React from 'react'
import { assets } from '../assets/assets'
import { useDispatch, useSelector } from 'react-redux'
import { newPrompt } from '../store/promptSlice'
import GeminiCall from '../Custon Hook/GeminiCall'


function SearchBar() {

    const dispatch = useDispatch()
    const { prompt } = useSelector((state) => state.prompts)
    const gemini = GeminiCall()


    const geminiCallOnEnter = (e) => {
        if (e.key === "Enter") {
            gemini(prompt);
        }
    }
    return (
        <div className='searchbar'>
            <div>
                <input type="text"
                    placeholder='Enter a prompt here'
                    value={prompt}
                    onChange={(e) => dispatch(newPrompt(e.target.value))}
                    onKeyDown={geminiCallOnEnter}

                />
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {prompt && <img
                    src={assets.send_icon}
                    alt="send button"
                    onClick={() => gemini(prompt)}
                />}
            </div>
        </div>
    )
}

export default SearchBar
