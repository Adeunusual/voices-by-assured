const Button = ({ text, icon, link, styleClass, children, onclick, id }) => {
    const content = (items) => {
        if (items) return items;

        if (link) {
            return <a href={link}>
                {text}
            </a>
        } else return <span>
            {text}
        </span>
    }


    return (
        <button
            id={id}
            className={`${styleClass} ${icon}`}
            onClick={onclick}
        >
            {content(children)}
        </button>
    )
}

Button.defaultProps = {
    text: '',
    icon: '',
    id: '',
    link: null,
    styleClass: '',
    onclick: () => null
}

export default Button;