
import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import mobileLogo from './assets/images/logo-mobile.svg';
import logo from './assets/images/logo_light.svg'
import Button from './Button';
import MobileView from './MobileView';

const Navbar = ({ navbar, showNavbar, mobileNav }) => {

    // search input
    const searchRef = useRef();
    const showSearch = () => searchRef.current.classList.toggle("display_input");
    return (
        <>
            <div className='header'>
                <div className='flex'>
                    <button className='navbar-btn-icon' onClick={showNavbar}>
                        <FaBars className='icon pointer' />
                    </button>
                    <img className='header_mobile-logo pointer' src={mobileLogo} alt="mobile_logo" />
                </div>
                <nav className={`navbar ${mobileNav ? 'responsive_nav' : ''}`} ref={navbar}>
                    <div className="nav-items">
                        <ul className="nav-menu">
                            <li><a href="#how-it-works"> How it Works</a></li>
                            <li><a href="#selectCard"> Select a Card</a></li>
                            <li><a href="#premium"> Premium</a></li>
                        </ul>
                    </div>

                    <div className="nav-logo">
                        <span className='desktop-logo'>
                            <img src={logo} alt="desktop_logo" />
                        </span>
                    </div>

                    <div className="search-assured">
                        <button className='search-btn'>
                            <input ref={searchRef} type="text" placeholder='Search card of the person you support...' className='search-input' />
                            <svg onClick={showSearch} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                        <Button text='Assured.com' link='https://useassured.com/' styleClass='assured-btn' />
                    </div>
                    <MobileView showBar={showNavbar} />
                </nav>
                <Button text='Assured.com' link='https://useassured.com/' styleClass='assured-btn mobile-assured-btn' />
            </div>
        </>
    )
}

export default Navbar;