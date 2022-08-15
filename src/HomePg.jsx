import { useRef, useState } from "react";
import { FaImage, FaEdit, FaDownload } from 'react-icons/fa';
import Banner from "./components/bannerSection";
import CardSection from "./components/cardSection";
import Footer from "./components/footer";
import Header from './components/headerSection';
import IconBox from "./components/hwSection";


const HomePg = () => {

    const navbar = useRef();
    const [showMobileNav, setMobile] = useState(false)
    const showNavbar = () => setMobile(!showMobileNav);

    return (
        <>
            <Header mobileNav={showMobileNav} navbar={navbar} showNavbar={showNavbar} />
            <div className="home--wrapper">
                <Banner hide={showMobileNav} />
                <div className="cardInfo-section">
                    <div className="card-info">
                        <IconBox type='select' icon={<FaImage />} />
                        <IconBox type='customise' icon={<FaEdit />} />
                        <IconBox type='download' icon={<FaDownload />} />
                    </div>
                </div>
                <CardSection hide={showMobileNav} />
                <Footer hide={showMobileNav} />
            </div>
            {/* <div class="darkmode-trigger uk-position-bottom-right uk-position-small uk-position-fixed uk-box-shadow-large uk-radius-circle" data-darkmode-toggle="">
                <label class="switch">
                    <span class="sr-only">Dark mode toggle</span>
                    <input type="checkbox" />
                    <span class="slider"></span>
                </label>
            </div> */}
        </>
    )
}

export default HomePg;