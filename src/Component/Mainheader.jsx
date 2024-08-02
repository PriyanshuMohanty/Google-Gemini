import React from 'react'
import { assets } from '../assets/assets'
import { Card } from './'

function Mainheader() {
    return (
        <>
            <div>
                <div className='intro'>
                    <p>Hello, Dev</p>
                    <p>How can i help you today?</p>
                </div>
                <div className='cards'>
                    <Card cardPrompt={`suggest beautiful place to see on an upcoming road trip`} cardIcon={assets.compass_icon} />
                    <Card cardPrompt={`Briffly sumarrize this concept: urban planing`} cardIcon={assets.bulb_icon} />
                    <Card cardPrompt={`Brainstrom team bonding activities for our work reteart`} cardIcon={assets.message_icon} />
                    <Card cardPrompt={`improve the readabiltiy of the following code`} cardIcon={assets.code_icon} />
                </div>
            </div>
        </>
    )
}

export default Mainheader
