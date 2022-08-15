import './assets/css/index.css';

const Banner = ({ hide }) => {
    return (
        <div id="bannerWraper">
            <div className={`banner ${hide ? 'd-none' : ''}`} id="bannerBg">
                {/* <img className="bannerBg" src={bannerBg} alt="" /> */}
                <div className="bannerTxt">
                    <h1>Your voices matter.
                        <br />
                        Let it be heard.
                    </h1>
                    <p>The simplest way to express yourself by creating cards for the people you truly support.</p>

                    <a id="how-it-works-section" href="#selectCard" className=" bannerTxt-btn">Select a Card Now</a>
                </div>
            </div>
        </div>
    )
}

export default Banner;