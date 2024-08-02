import React from 'react'
import { assets } from '../assets/assets'
import { useDispatch, useSelector } from 'react-redux'
import { newPrompt } from '../store/promptSlice'
import GeminiCall from '../Custon Hook/GeminiCall'
import styled from 'styled-components';

const Mic = styled.span`
    @media (max-width:460px){
        display:none;
    }`

const Micphone = styled.span`
    @media (min-width:460px){
        display:none;
    }`

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

                <Mic>
                    <img src={assets.mic_icon} alt="" />
                </Mic>

                {prompt ?
                    (<img
                        src={assets.send_icon}
                        alt="send button"
                        onClick={() => gemini(prompt)}
                    />)
                    :
                    (<Micphone>
                        <img src={assets.mic_icon} alt="" />
                    </Micphone>)
                }
            </div>
        </div>
    )
}

export default SearchBar
