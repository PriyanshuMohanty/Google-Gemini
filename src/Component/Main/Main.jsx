import React, { useState } from 'react'
import "./Main.css"
import { useSelector } from 'react-redux'
import { Navbar, Mainheader, QNA, SearchBar, Footer } from '../'

function Main() {
    const { recentPrompt } = useSelector((state) => state.prompts)


    return (
        <div className='main'>
            <Navbar />
            <div className='Mainheader'>
                {recentPrompt === "" ? (<Mainheader />) : (<QNA />)}

            </div >
            <SearchBar />
            <Footer />
        </div >
    )
}

export default Main
