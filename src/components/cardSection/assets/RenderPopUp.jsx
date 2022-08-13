import React from 'react';
import '../assets/css/popUpModal.css';

const RenderPopUp = (props) => {

    return (props.trigger) ? (
        < div className="useCard--popUp" >
            <div className="popUp--inner">
                <button onClick={() => props.setTrigger(false)} className="popUp-close">
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#FFF" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#FFF" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>
                </button>
                <div className="laterImg">
                    <img src={props.cardSrc} alt="card--img" />
                </div>
                <div className='btns'>
                    <button className='download' onClick={props.handleCard}>Download your Card</button>
                    <button className='share' onClick={() => props.handleCard('share')}>Share your Card</button>
                    <button className='edit' onClick={() => props.setTrigger(false)}>Re-edit your Card</button>
                </div>
            </div>
        </div >
    ) : "";
}

export default RenderPopUp;