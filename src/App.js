import Header from "./components/header/header";
import Welcome from "./components/welcome/welcome";
import Rooms from "./components/rooms/rooms";
import Test from "./components/exam/test";
import Footer from "./components/footer/footer";

import "./main.js`"

// ----- Sass -----
import "./components/header/header.scss";
import "./sass/main.scss"

function App() {
  return (
    <>
      <div className="wrapper">
          <Header />
          <Welcome />
      </div>
          <Rooms />
          <Test />
          <Footer />
    </>
  );
}

export default App;
