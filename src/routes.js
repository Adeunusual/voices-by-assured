// import { Home } from "./layouts/Home";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaSnapchatGhost } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaRedditAlien } from 'react-icons/fa';
import { FaQuora } from 'react-icons/fa';
const routes = [

    {
        id: 'how-it-works',
        route: '/#',
        isComponent: false,
        text: 'How it Works',
    },
    {
        id: 'select-card',
        route: '/#',
        isComponent: false,
        text: 'Select a Card'
    },
    {
        id: 'premium',
        route: '/#',
        isComponent: false,
        text: 'Premium'
    },
    {
        id: 'premium',
        route: '/#',
        isIcon: false,
        icon: <FaTwitter className='icon' />
    },
    {
        id: 'twitter-Icon',
        route: '/#',
        isIcon: false,
        icon: <FaInstagram className='icon' />
    }
    , {
        id: 'instagram-Icon',
        route: '/#',
        isIcon: false,
        icon: <FaFacebookF className='icon' />
    },
    {
        id: 'facebook-Icon',
        route: '/#',
        isIcon: false,
        icon: <FaSnapchatGhost className='icon' />
    },
    {
        id: 'snapchat-Icon',
        route: '/#',
        isIcon: false,
        icon: <FaYoutube className='icon' />
    },
    {
        id: 'youTube-Icon',
        route: '/#',
        isIcon: false,
        icon: <FaRedditAlien className='icon' />
    },
    {
        id: 'github-Icon',
        route: '/#',
        isIcon: false,
        icon: <FaQuora className='icon' />
    }
]

export default routes;