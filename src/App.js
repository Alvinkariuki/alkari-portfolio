import "./App.css";

// component imports
import Navbar from "./components/Navbar/Navbar.component";
import Carousel from "./components/Carousel/Carousel.component";
import TitleMsg from "./components/TitleMsg/TitleMsg.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <TitleMsg />
      My react app
    </div>
  );
}

export default App;
