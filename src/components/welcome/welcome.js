import "./welcome.scss"

const Welcome = ()  =>{
    return(
        <section className="welcome">
            <div className="container">
                <div className="welcome__inner">
                    <div className="welcome__content">
                        <h2 className="welcome__content-heading--top">WELCOME TO</h2>
                        <h1 className="welcome__content-heading">LUXURY <br /> <span className="welcome__content-heading--span">HOTELS</span></h1>
                        <p className="welcome__content-text">Book your stay and enjoy Luxury <br /> redefined at the most affordable rates.</p>
                    </div>
                    <div className="welcome__link-box">
                        <a className="welcome__link" href="#">BOOK NOW</a>
                    </div>
                    <h3 className="welcome__scrool-title">Scrool</h3>
                    <a className="welcome__scrool-btn" href="#footer"></a>
                </div>
            </div>
        </section>
    )
}

export default Welcome;