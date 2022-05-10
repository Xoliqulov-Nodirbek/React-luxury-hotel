import "./rooms.scss"
import RoomIMg1 from "../../assets/images/image-1.jpg";
import RoomIMg2 from "../../assets/images/image-2.jpg";

const Rooms = () => {
    return (
        <section className="rooms">
            <div className="container">
                <div className="rooms__inner">
                    <h2 className="rooms__title">All our room types are including complementary breakfast</h2>
                    <div className="rooms__wrapper1">
                        <div className="rooms__wrapper1-content">
                            <h2 className="rooms__wrapper1-content--title">Luxury redefined</h2>
                            <p className="rooms__wrapper1-content--text">Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home  life and find a private paradise for yourself.</p>
                            <a className="rooms__wrapper1-content--link" href="#">EXPLORE<span className="animation-span"></span></a>
                        </div>
                        <img className="rooms__wraper1-img" src={RoomIMg1} alt="hotel's first room" />
                    </div>
                    <div className="rooms__wrapper2">
                        <div className="rooms__wrapper2-content">
                            <h2 className="rooms__wrapper2-content--title">Leave your worries in the sand</h2>
                            <p className="rooms__wrapper2-content--text">We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It  seems like time stands still watching the ocean. </p>
                            <a className="rooms__wrapper2-content--link" href="#">EXPLORE<span className="animation-span"></span></a>
                        </div>
                        <img className="rooms__wraper2-img" src={RoomIMg2} alt="hotel's first room" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rooms;