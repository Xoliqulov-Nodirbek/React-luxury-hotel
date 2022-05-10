import "./header.scss";
import HeaderBurger from "../../assets/images/site-open-menu.svg"

const Header = () => {
    return (
        <header className="site__header">
            <div className="container">
                <div className="header__inner">
                        <a className="header__logo" href="index.html" />
                        <ul className="header__list">
                            <li className="header__item"><a className="header__item-link header__item-link--active" href="index.html">Home</a></li>
                            <li className="header__item"><a className="header__item-link" href="#">Facilities</a></li>
                            <li className="header__item"><a className="header__item-link" href="#">Rooms</a></li>
                            <li className="header__item"><a className="header__item-link" href="#">Contact-us</a></li>
                        </ul>
                        <button className="header__menu"><img className="header__menu-img" src={HeaderBurger} alt="site-hamburg-btn" /></button>
                    </div>
            </div>
        </header>
    )
}

export default Header;