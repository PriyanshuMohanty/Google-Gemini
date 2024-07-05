import React from 'react'
import { assets } from '../assets/assets'

function Navbar() {
    return (
        <div>
            <div className='Gemini'>
                <div>Gemini</div>
                <div><img src={assets.user_icon} alt="" /></div>
            </div>
        </div>
    )
}

export default Navbar
