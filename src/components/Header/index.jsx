import cover from '../../assets/cover/coverImage.jpg';

function Header(props) {
    return (
        <header className="flex-row space-between px-1">
            <h1>Lernantino</h1>
            {/* sources the cover image */}
            <img src={cover} alt="wooden background"></img>
            {props.children}
        </header>
    );
}

export default Header;