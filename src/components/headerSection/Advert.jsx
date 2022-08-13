import React, { useRef } from 'react';

const Advert = () => {
    const advert = useRef();
    const hide = () => advert.current.classList.toggle("hide_nav");

    return (
        <div className="top--nav" ref={advert}>
            <p className="topNav--txt pointer">
                <span className='topNav--txt-desktop'>New Premium digital items are here and 100% ready to use.</span>
                <span className='topNav--txt-mobile'>New Premium digital items are here.</span>
            </p>
            <div className='topNav-Btn-wrapper'>
                <span className='topNav-times pointer'>
                    <svg onClick={hide} width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#F9F9F9" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#F9F9F9" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></span>
                <span className='topNav-Btn'>
                    <button><a href="/premium"> Buy Now</a></button>
                </span>
            </div>
        </div>
    )
}

export default Advert