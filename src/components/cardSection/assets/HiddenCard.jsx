import React from 'react';
import data from './CardData.jsx';
import '../assets/css/index.css';


const HiddenCard = () => {
    return (
        <>
            <div className="hiddenWrapper">
                {data.map((dataGotten) => (
                    <div className="hiddenCard">
                        <img className='Card1080' src={dataGotten.card} alt="card" />
                        <div className="uploadedImg">

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HiddenCard;