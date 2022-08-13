import React from 'react'
import Advert from './Advert';
import Navbar from './Navbar';
import './assets/css/index.css'

const Header = ({ mobileNav, navbar, showNavbar }) => {
    return (
        <>
            <div className='header-wrapper'>
                <Advert />
                <Navbar navbar={navbar} showNavbar={showNavbar} mobileNav={mobileNav} />
            </div>
        </>
    )
}

export default Header;