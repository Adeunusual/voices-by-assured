import React from 'react';
import './assets/css/index.css';

const IconBox = ({ icon, type }) => {
    const text = (type) => {
        switch (type) {
            case 'select':
                return { h3: '1. Select a Card', p: 'Select your desired card from the card selection section.' }
            case 'download':
                return { h3: '3. Download or Share Card', p: 'Download or share your card on various social media platforms.' }
            case 'customise':
                return { h3: '2. Customize the card', p: 'Fill in the fields on the pop-up form to personalize your card..' }
            default: return '';
        }
    }


    return (
        <div className="card" id='how-it-works'>
            <div className="card-icon">
                {icon}
            </div>
            <h3> {text(type).h3} </h3>
            <p>{text(type).p}</p>
        </div>
    )
}

export default IconBox;