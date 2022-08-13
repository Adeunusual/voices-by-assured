import Tinubu from '../assets/images/Tinubu.jpg';
import PetrObi from '../assets/images/PeterObi.jpg';
import atiku from '../assets/images/Atiku.jpg';

import voteNig from '../assets/images/VoteNigeria.jpg';

import TinubuCard from '../assets/images/TinubuCard.jpg'
import PeterObiCard from '../assets/images/PeterObiCard.jpg'
import AtikuCard from '../assets/images/AtikuCard.jpg'
import vNaijaCard from '../assets/images/vNaijaCard.jpg'

const HiddenData = [
    {
        cardId: 0,
        className: 'tinubuCard',
        candidateImg: Tinubu,
        candidateName: 'Tinubu',
        ardImg: TinubuCard,

    },
    {
        cardId: 1,
        className: 'peterObiCard',
        candidateImg: PetrObi,
        candidateName: 'Peter Obi',
        cardImg: PeterObiCard,
    },
    {
        cardId: 2,
        className: 'atikuCard',
        candidateImg: atiku,
        candidateName: 'Atiku',
        cardImg: AtikuCard,
    },
    {
        cardId: 3,
        className: 'voiceNig',
        candidateImg: voteNig,
        candidateName: 'VoteNigeria',
        cardImg: vNaijaCard,
    }
]
export default HiddenData;