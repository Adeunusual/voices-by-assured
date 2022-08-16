import React, { useState } from 'react'
import Advert from './Advert';
import Navbar from './Navbar';
import './assets/css/index.css'

const Header = ({ mobileNav, navbar, showNavbar, setModeIcon, modeIcon }) => {
    const [fix, setFix] = useState(false);
    const setFixed = () => {
        if (window.scrollY >= 80) {
            setFix(true);
        } else {
            setFix(false);
        }
    }

    window.addEventListener("scroll", setFixed);
    return (
        <>
            <div className='header-wrapper'>
                <Advert />
                <div className={fix ? `navbar-wrapper fixed` : `navbar-wrapper`}>
                    <Navbar navbar={navbar} showNavbar={showNavbar} mobileNav={mobileNav} modeIcon={modeIcon} setModeIcon={setModeIcon} />
                </div>
            </div>
        </>
    )
}

export default Header;