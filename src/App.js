import Header from "./components/header/header";
import Welcome from "./components/welcome/welcome";
import Rooms from "./components/rooms/rooms";

import "./components/header/header.scss"

function App() {
  return (
    <>
      <div className="wrapper">
          <Header />
          <Welcome />
      </div>
          <Rooms />
    </>
  );
}

export default App;
