import React from 'react'
import "./Sidebar.css";
import { assets } from '../../assets/assets';
import { useDispatch, useSelector } from 'react-redux';
import GeminiCall from '../../Custon Hook/GeminiCall';
import { setRecentPrompt } from '../../store/promptSlice';
import { HoverPopup, Location, Hamburger } from '../index';
import styled from 'styled-components';

const Popup = styled.div`
    @media (max-width:460px){
        display:none;
    }`


function Sidebar() {

    const { hamburger } = useSelector(state => state.hamburger)
    const { prompts, recentPrompt } = useSelector((state) => state.prompts);
    const dispatch = useDispatch()
    const gemini = GeminiCall()


    return (
        <div className={`sidebar ${!hamburger ? "hamburgar" : "hamburgarOpen"}`} >
            <div className='sidebarTop'>
                {/* <div
                    className={`menu_icon ${hamburgar ? "change" : ""} group relative`}
                    onClick={() => setHamburger((prev) => !prev)}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <HoverPopup text={hamburgar ? 'Collapse Menu' : 'Expand Menu'} position={'top-8'} />
                </div> */}
                <Hamburger />
                <div
                    className={`newChat iconText group relative ${recentPrompt && "newChatBlur"}`}
                    onClick={() => dispatch(setRecentPrompt(""))}
                >
                    <img src={assets.plus_icon} alt="" />
                    {hamburger && <p>New chat</p>}
                    <Popup>
                        <HoverPopup text={"New Chat"} position={'top-14 left-5'} />
                    </Popup>
                </div>
                {hamburger && <div className='recent'>
                    <div className='recentHeading'>Recent</div>
                    <div>
                        {prompts.map((prompt) => (
                            <div className='iconText group relative' key={prompt} onClick={() => { gemini(prompt) }}>
                                <img src={assets.message_icon} alt="" />
                                <p>{prompt.length > 15 ? prompt.slice(0, 15) + "..." : prompt}</p>
                                <Popup>
                                    <HoverPopup text={prompt} position={'left-44'} />
                                </Popup>
                            </div>
                        ))

                        }

                    </div>
                </div>}
            </ div>
            <div className='sidebarBottom'>

                <div className='iconText group relative'>
                    <img src={assets.question_icon} alt="" />
                    {hamburger && <p>Help</p>}
                    {!hamburger && (
                        <Popup>
                            <HoverPopup text='Help' position={'left-14'} />
                        </Popup>
                    )}
                </div>

                <div className='iconText group relative'>
                    <img src={assets.history_icon} alt="" />
                    {hamburger && <p>Activity</p>}
                    {!hamburger && (
                        <Popup>
                            <HoverPopup text='Activity' position={'left-14'} />
                        </Popup>
                    )}
                </div>

                <div className='iconText group relative' >
                    <img src={assets.setting_icon} alt="" />
                    {hamburger && <p>Setting</p>}
                    {!hamburger && (
                        <Popup>
                            <HoverPopup text='Setting' position={'left-14'} />
                        </Popup>
                    )}
                </div>
                <div className={`sidebarlocation ${hamburger ? "block" : "hidden"}`}><Location /></div>
            </div>
        </div>
    )
}

export default Sidebar
