const ToggleMode = ({ toggleTheme, theme, setModeIcon, modeIcon }) => {


    const handleChangeIcon = () => {
        setModeIcon((prevState) => {
            return !prevState;
        });
    };
    return (
        <div className="theme-container shadow-dark" onClick={toggleTheme} checked={theme === 'dark'} >
            {modeIcon ?
                (
                    <div className="toggle-wrapper toggle-moon">
                        <img
                            className="active"
                            src="https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
                            alt="sun"
                            onClick={() => handleChangeIcon()}
                        />
                    </div>
                )
                :
                (
                    <div className="toggle-wrapper toggle-sun">
                        <img
                            className="inactive"
                            src="https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg"
                            alt="moon"
                            onClick={() => handleChangeIcon()}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default ToggleMode;