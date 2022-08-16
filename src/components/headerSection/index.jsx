import React from 'react'
import Advert from './Advert';
import Navbar from './Navbar';
import './assets/css/index.css'

const Header = ({ mobileNav, navbar, showNavbar, setModeIcon, modeIcon }) => {
    return (
        <>
            <div className='header-wrapper'>
                <Advert />
                <Navbar navbar={navbar} showNavbar={showNavbar} mobileNav={mobileNav} modeIcon={modeIcon} setModeIcon={setModeIcon} />
            </div>
        </>
    )
}

export default Header;