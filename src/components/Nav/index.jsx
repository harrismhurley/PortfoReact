import { link } from 'react-router-dom';
import { capitolized } from '../../utils/helpers';

function nav({ currentPage }) {
    const pages = ['portfolio', 'contact', 'resume'];

    return (
        <nav>
            <ul className="flex-row">
                <li
                    className={`mx-5 ${currentPage === '/' && 'navActive'}`}
                    key="about"
                >
                    <Link to="/">About</Link>
                </li>
                {pages.map((Page) => (
                    <li
                        className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
                        key={Page}
                    >
                        <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;