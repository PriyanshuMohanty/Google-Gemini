import React from 'react'
import { HoverPopup } from './index'
import { useDispatch, useSelector } from 'react-redux'
import { setHamburger } from '../store/HamburgerSlice'
import styled from 'styled-components';

const Popup = styled.div`
    @media (max-width:460px){
        display:none;
    }`

function Hamburger() {
    const { hamburger } = useSelector(state => state.hamburger)
    const dispatch = useDispatch();
    return (
        <div>
            <div
                className={`menu_icon ${hamburger ? "change" : ""} group relative`}
                onClick={() => dispatch(setHamburger())}
            >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <Popup>
                    <HoverPopup text={hamburger ? 'Collapse Menu' : 'Expand Menu'} position={'top-8'} />
                </Popup>
            </div>
        </div>
    )
}

export default Hamburger
