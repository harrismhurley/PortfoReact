import cover from '../../assets/cover/coverImage.png';

function Header(props) {
    return (
        <header className="flex-row space-between px-1">
            <h1>Lernantino</h1>
            {/* sources the cover image */}
            <img src={cover} alt="Dallas Skyline"></img>
            {props.children}
        </header>
    );
}

export default Header;