import React, { useState } from 'react'
import "./Sidebar.css";
import { assets } from '../../assets/assets';
import { useDispatch, useSelector } from 'react-redux';
import GeminiCall from '../../Custon Hook/GeminiCall';
import { setRecentPrompt } from '../../store/promptSlice';

function Sidebar() {

    const [hamburgar, setHamburger] = useState(true)
    const { prompts } = useSelector((state) => state.prompts);
    const dispatch = useDispatch()
    const gemini = GeminiCall()


    return (
        <div className={`sidebar ${!hamburgar ? "hamburgar" : ""}`} >
            <div className='sidebarTop'>
                <div
                    className={`menu_icon ${hamburgar ? "change" : ""}`}
                    onClick={() => setHamburger((prev) => !prev)}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div
                    className='newChat iconText'
                    onClick={() => dispatch(setRecentPrompt(""))}
                >
                    <img src={assets.plus_icon} alt="" />
                    {hamburgar && <p>New Chat</p>}
                </div>
                {hamburgar && <div className='recent'>
                    <div className='recentHeading'>Recent</div>
                    <div>
                        {prompts.map((prompt) => (
                            <div className='iconText' key={prompt} onClick={() => { gemini(prompt) }}>
                                <img src={assets.message_icon} alt="" />
                                <p>{prompt.length > 15 ? prompt.slice(0, 15) + "..." : prompt}</p>
                            </div>
                        ))

                        }

                    </div>
                </div>}
            </ div>
            <div className='sidebarBottom'>

                <div className='iconText'>
                    <img src={assets.question_icon} alt="" />
                    {hamburgar && <p>Help</p>}
                </div>

                <div className='iconText'>
                    <img src={assets.history_icon} alt="" />
                    {hamburgar && <p>Activity</p>}
                </div>

                <div className='iconText'>
                    <img src={assets.setting_icon} alt="" />
                    {hamburgar && <p>Setting</p>}
                </div>

            </div>
        </div>
    )
}

export default Sidebar
