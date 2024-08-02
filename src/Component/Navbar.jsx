import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Hamburger, Profile } from './index'
import styled from 'styled-components';

const Showhamburger = styled.div`
    @media (min-width:960px){
        display:none;
    }`

function Navbar() {
    const [showProfile, setShowProfile] = useState(false)

    const handelClick = (event) => {
        const isProfileClick = event.target.closest(`.profile`)
        if (!isProfileClick) {
            setShowProfile((prev) => !prev)
        }

        if (event.target.closest('.closeProfile')) {
            setShowProfile(false)
        }
    }
    return (
        <div>
            <div className='Gemini'>
                <div className='GeminiHeader'>
                    <Showhamburger>
                        <Hamburger />
                    </Showhamburger>
                    <div className='GenimiTitle'>Gemini</div>
                </div>
                <div
                    className='showProfile'
                    tabIndex={0}
                    onClick={handelClick}
                    onBlur={() => setShowProfile(false)}
                >
                    <img src={assets.user_icon} alt="" />
                    {showProfile && <Profile />}
                </div>
            </div>
        </div>
    )
}

export default Navbar
