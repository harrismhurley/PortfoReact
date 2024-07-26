import cover from '../../assets/cover/coverImage.png';

function Header(props) {
    return (
        <header className="flex-row space-between px-1 py-5">
            <h1>Harris Hurley</h1>
            {/* sources the cover image */}
            <img src={cover} alt="Dallas Skyline"></img>
            {props.children}
        </header>
    );
}

export default Header;