function Footer() {

    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/harrismhurley",
        },
        {
            name: "fab fa-linkedub",
            link: "www.linkedin.com/in/harris-hurley/",
        },
        {
            name: "fab fa-stack-overflow",
            link: "https://stackoverflow.com/users/26500350/harrismhurley",
        },
    ]

    return (
        <footer className="flex-row px-1">
            {icons.map(icon =>
                (
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                )
            )}
        </footer>
    );
}

export default Footer