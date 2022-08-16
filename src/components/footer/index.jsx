
import './assets/css/footer.css';
import Button from '../../../src/components/headerSection/Button';
import routes from '../../routes';

const Footer = ({ hide }) => {
    return (
        <div className={`footer-wrapper ${hide ? 'd-none' : ''}`}>
            <footer>
                <h1>Never miss a drop</h1>
                <p>Subscribe for the latest news, drops & collectibles</p>
                <form action="" method="post" id="" name="" className="validate" target="_blank" noValidate="novalidate">
                    <span className="wrapTag-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tag-icons message"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </span>
                    <input
                        type="email"
                        name="email" autoComplete="off" className="footer-input" placeholder="Email" aria-invalid="false"
                    />
                    <Button text='Subscribe' link='/#' styleClass='input-btn'>
                        Subscribe
                    </Button >
                </form>
                <small>No worries we don't spam! Unsubscribe at any time by clicking on the link in the email.</small>
            </footer>
            <div className="footer-bottom">
                <div className="footer-icons">
                    {routes.filter(route => route.isIcon === false).map((route, i) => <li key={i}><a href={route.route} target="_blank" rel="noreferrer" >{route.icon}</a></li>)}
                </div>
                <div className="fb-txt">
                    <div className="assuredDonate">
                        <p><a href="https://useassured.com/" target="_blank" rel="noreferrer">Assured.com</a></p>
                        <p>Donate to this Course</p>
                    </div>
                    <p className='copyright'>© Voices by <span>Asssured</span>, All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;