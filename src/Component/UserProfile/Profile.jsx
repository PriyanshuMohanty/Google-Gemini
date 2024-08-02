import React from 'react'
import "./Profile.css"
import { assets } from '../../assets/assets'

function Profile() {
    return (
        <div className='profile'>
            <div className='closeProfile change'>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </div>
            <div className='userEmail'>
                <p>jainank548@gmail.com</p>
            </div>
            <div className='profileContainer'>
                <div className='profileImg'>
                    <img src={assets.user_icon} alt="" />
                    <div className='profileImgEdit'>
                        <img src={assets.pencil_icon} alt="" />
                    </div>
                </div>
                <div className='greetUser'>
                    <h2>Hi Priyanshu</h2>
                </div>
                <div className='manageAccount'>
                    <span>manage you gemini account</span>
                </div>
            </div>
            <div className='userMenuContainer'>
                <div className='userAccount'>
                    <div>
                        <img src={assets.user_icon} alt="" />
                    </div>
                    <div>
                        <h2>priyanshu</h2>
                        <p>www.gmail.com</p>
                    </div>
                </div>
                <div className='singUp'>
                    <div><img src={assets.signup_icon} alt="" /></div>
                    <div>
                        <h2>Sign up</h2>
                    </div>
                </div>
                <div className='singIn'>
                    <div><img src={assets.login_icon} alt="" /></div>
                    <div>
                        <h2>Sign in</h2>
                    </div>
                </div>
            </div>
            <div className='profilefooter'>
                <span>Privacy Policy</span>
                <span>•</span>
                <span>Term of servies</span>
            </div>
        </div>
    )
}

export default Profile
