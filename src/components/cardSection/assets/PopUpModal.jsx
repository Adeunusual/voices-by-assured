import { useRef } from 'react';
import '../assets/css/popUpModal.css';

const PopUpModal = ({ children, trigger, setTrigger, handleCardImgChange, imgSrc, renderCard }) => {
    const previewImg = useRef();
    const display = () => previewImg.current.classList.add("show_preview");

    //Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (trigger) ? (
        < div className='popUp' >
            <div className="popUpInner">
                <button className='popUp-close' onClick={() => setTrigger(false)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#FFF" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#FFF" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>
                </button>
                <div className="heading">
                    <h3>Customize Card</h3>
                    <p>Enter the fields on the below form to personalize your card.</p>
                </div>
                <form action="" onSubmit={handleSubmit} className='popUp-form'>
                    <div className="block">
                        <div id="upload-img-border">
                            <div className="profile" ref={previewImg}>
                                <img src={imgSrc} id='img-preview' alt='' />
                            </div>
                            <p className="form-label">JPG, PNG, WEBP, Max 1Mb.</p>
                            <div className="form-custom">
                                <input id='file-inputTag' type='file' name='file-inputTag' className="img-input" onChange={handleCardImgChange} onClick={display} accept="image/*" required />
                                <span className='upload-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="upload-icon"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                                </span>
                                <label htmlFor='file-inputTag' className='upload-txt'>Upload Picture</label>
                            </div>
                        </div>
                    </div>
                    <div className='form-block-flex'>
                        <div className='form-block'>
                            <label className='labelStyle' htmlFor="nameInput">Your name</label>
                            <input className='inputStyle' type="text" name='nameInput' placeholder='e.g Abayomi' />
                        </div>
                        <div className='form-block'>
                            <label className='labelStyle' htmlFor="twitter">Twitter handle</label>
                            <input className='inputStyle' type="text" name='twitter' placeholder='e.g @yomiblaze' />
                        </div>
                    </div>
                    <div className='form-block'>
                        <label className='labelStyle' htmlFor="email">Email address</label>
                        <input className='inputStyle' type="email" name='email' placeholder='Enter your email address' />
                    </div>

                    <div className="create-card">
                        <button className='custom-btn create-btn' onClick={() => renderCard('render')} >
                            Create Card
                        </button>
                    </div>
                </form>
                {/* {children} */}
            </div>

        </div >
    ) : '';
}

export default PopUpModal;