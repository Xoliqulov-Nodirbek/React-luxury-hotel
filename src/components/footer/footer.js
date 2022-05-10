import "./footer.scss";

const Footer = () => {
    return (
        <footer className="site__footer">
            <div className="container">
                <div className="footer__inner" id="footer">
                    <div className="footer__left">
                        <a className="footer__left-logo" href="index.html"></a>
                        <p className="footer__left-text">497 Evergreen Rd. Roseville, CA 95673</p>
                        <a className="footer__left-tel" href="tel:+44 345 678 903">+44 345 678 903</a>
                        <a className="footer__left-email" href="mailto:luxury_hotels@gmail.com">luxury_hotels@gmail.com</a>
                    </div>
                    <div className="footer__nav">
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item"><a href="index.html" className="footer__nav-link">About Us</a></li>
                            <li className="footer__nav-item"><a href="#" className="footer__nav-link">Contact</a></li>
                            <li className="footer__nav-item"><a href="#" className="footer__nav-link">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="footer__links">
                        <ul className="footer__links-list">
                            <li className="footer__links-item"><a href="#" className="footer__links-facebook">Facebook</a></li>
                            <li className="footer__links-item"><a href="#" className="footer__links-twitter">Twitter</a></li>
                            <li className="footer__links-item"><a href="#" className="footer__links-instagram">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="footer__email">
                        <strong className="footer__email-title">Subscribe to our newsletter</strong>
                        <form className="footer__email-form" method="post" action="https://echo.htmlacademy.ru" autoComplete="off">
                            <input className="footer__email-input" type="email" name="Email" aria-label="Enter your email address" placeholder="Email Address" required />
                            <button className="footer__email-btn">Ok</button>
                        </form>
                    </div>
                </div>
            </div>
    </footer>
    )
}

export default Footer;