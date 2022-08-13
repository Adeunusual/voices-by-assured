import Card from './assets/Card';

const CardSection = ({ hide }) => {
    return (
        <>
            <div className={`card-wrapper ${hide ? 'd-none' : ''}`} id="selectCard">
                <div className="card-inner-w">
                    <div className="heading">
                        <h2>Select a Card 🔥</h2>
                    </div>
                    <Card />
                </div>
            </div>
        </>
    )
}

export default CardSection;
