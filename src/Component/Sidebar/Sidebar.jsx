import React, { useState } from 'react'
import "./Sidebar.css";
import { assets } from '../../assets/assets';
import { useDispatch, useSelector } from 'react-redux';
import GeminiCall from '../../Custon Hook/GeminiCall';
import { setRecentPrompt } from '../../store/promptSlice';
import { HoverPopup } from '../index';
import Location from '../Location';

function Sidebar() {

    const [hamburgar, setHamburger] = useState(true)
    const { prompts } = useSelector((state) => state.prompts);
    const dispatch = useDispatch()
    const gemini = GeminiCall()


    return (
        <div className={`sidebar ${!hamburgar ? "hamburgar" : "hamburgarOpen"}`} >
            <div className='sidebarTop'>
                <div
                    className={`menu_icon ${hamburgar ? "change" : ""} group relative`}
                    onClick={() => setHamburger((prev) => !prev)}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <HoverPopup text={hamburgar ? 'Collapse Menu' : 'Expand Menu'} position={'top-8'} />
                </div>
                <div
                    className='newChat iconText group relative'
                    onClick={() => dispatch(setRecentPrompt(""))}
                >
                    <img src={assets.plus_icon} alt="" />
                    {hamburgar && <p>New chat</p>}
                    <HoverPopup text={"New Chat"} position={'top-14 left-5'} />
                </div>
                {hamburgar && <div className='recent'>
                    <div className='recentHeading'>Recent</div>
                    <div>
                        {prompts.map((prompt) => (
                            <div className='iconText group relative' key={prompt} onClick={() => { gemini(prompt) }}>
                                <img src={assets.message_icon} alt="" />
                                <p>{prompt.length > 15 ? prompt.slice(0, 15) + "..." : prompt}</p>
                                <HoverPopup text={prompt} position={'left-44'} />
                            </div>
                        ))

                        }

                    </div>
                </div>}
            </ div>
            <div className='sidebarBottom'>

                <div className='iconText group relative'>
                    <img src={assets.question_icon} alt="" />
                    {hamburgar && <p>Help</p>}
                    {!hamburgar && <HoverPopup text='Help' position={'left-14'} />}
                </div>

                <div className='iconText group relative'>
                    <img src={assets.history_icon} alt="" />
                    {hamburgar && <p>Activity</p>}
                    {!hamburgar && <HoverPopup text='Activity' position={'left-14'} />}
                </div>

                <div className='iconText group relative' >
                    <img src={assets.setting_icon} alt="" />
                    {hamburgar && <p>Setting</p>}
                    {!hamburgar && <HoverPopup text='Setting' position={'left-14'} />}
                </div>
                {hamburgar && <div><Location /></div>}
            </div>
        </div>
    )
}

export default Sidebar
