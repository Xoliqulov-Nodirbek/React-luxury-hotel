import "./test.scss"
import btn1Img from "../../assets/images/btn-1-img.svg";
import btn2Img from "../../assets/images/btn-2-img.svg";

const Test = () => {
    return (
        <section className="test">
            <div className="container">
                <div className="test__inner">
                    <h2 className="test__title">Testimonials</h2>
                    <div className="test__content">
                        <p className="test__content--text">"Calm, Serene, Retro – What a way to relax and enjoy"</p>
                        <p className="test__content--user"> Mr. and Mrs. Baxter, UK</p>
                    </div>
                    <div className="test__content1">
                        <p className="test__content--text">"Calm, Serene, Retro – What a way to relax and enjoy"</p>
                        <p className="test__content--user"> Mr. and Mrs. Jon Doe, UK</p>
                    </div>
                    <div className="test__buttons">
                        <button className="test__buttons-one"><img className="test__buttons-img" src={btn1Img} alt="button background image" /></button>
                        <button className="test__buttons-two"><img className="test__buttons-img" src={btn2Img} alt="button background image" /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Test;