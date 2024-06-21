import React, { useState } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import run from '../../Gemini/Gemini'
import { useDispatch } from 'react-redux'
import { addPrompts } from '../../store/promptSlice'

function Main() {
    const [prompt, setprompt] = useState("")
    const [recentprompt, setrecentprompt] = useState("")
    const [geminirespones, setgeminirespones] = useState("")
    const dispatch = useDispatch()

    const geminiCall = async () => {
        setrecentprompt(prompt)
        dispatch(addPrompts(prompt))
        const respones = await run(prompt)
        setgeminirespones(respones)
    }

    const geminiCallOnEnter = (e) => {
        if (e.key === "Enter") {
            geminiCall()
        }
    }

    return (
        <div className='main'>
            <div className='Gemini'>
                <div>Gemini</div>
                <div><img src={assets.user_icon} alt="" /></div>
            </div>

            <div className='Mainheader'>
                {recentprompt === "" ?
                    (<div>
                        <div className='intro'>
                            <p>Hello, Dev</p>
                            <p>How can i help you today ?</p>
                        </div>
                        <div className='cards'>
                            <div>
                                <div className='cardPrompt'>
                                    <p>suggest beautiful place to see on an upcoming road trip</p>
                                </div>
                                <div className='icon'>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                            </div>
                            <div >
                                <div className='cardPrompt'>
                                    <p>Briffly sumarrize this concept: urban planing </p>
                                </div>
                                <div className='icon'>
                                    <img src={assets.bulb_icon} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className='cardPrompt'>
                                    <p>Brainstrom team bonding activities for our work reteart</p>
                                </div>
                                <div className='icon'>
                                    <img src={assets.message_icon} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className='cardPrompt'>
                                    <p>improve the readabiltiy of the following code</p>
                                </div>
                                <div className='icon'>
                                    <img src={assets.code_icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    ) :
                    (

                        <div className='QNA'>
                            <div className='User'>
                                <p>{recentprompt}</p>
                                <img src={assets.user_icon} alt="" />
                            </div>
                            <div className='GeminiAI'>
                                <img src={assets.gemini_icon} alt="" />
                                <p>{geminirespones}</p>
                            </div>
                        </div>
                    )}

            </div>

            <div className='searchbar'>
                <div>
                    <input type="text"
                        placeholder='Enter a prompt here'
                        value={prompt}
                        onChange={(e) => setprompt(e.target.value)}
                        onKeyDown={geminiCallOnEnter}

                    />
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img
                        src={assets.send_icon}
                        alt="send button"
                        onClick={geminiCall}
                    />
                </div>
            </div>

            <div className='footer'>
                <p>Gemini may display inaccurate info, inculding about people,so double check its response, your privacy and Gemini app</p>
            </div>
        </div>
    )
}

export default Main
