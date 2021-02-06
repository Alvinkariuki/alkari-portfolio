// Package imports
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";

//  Style import
import "./App.css";

//  BGmage import
import BgImg from "./assets/imgs/parallax/background.webp";

// component imports
import Navbar from "./components/Navbar/Navbar.component";
import Carousel from "./components/Carousel/Carousel.component";
import TitleMsg from "./components/TitleMsg/TitleMsg.component";
import About from "./pages/About/About.component";
import Skills from "./pages/Skills/Skills.component";
import ProjectTimeline from "./components/ProjectTimeline/ProjectTimeline.component";
import ContactForm from "./pages/ContactForm/ContactForm.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Navbar />
      <Carousel />
      <TitleMsg />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImg}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      {/* Skills */}
      <div>
        <div>
          <Container className="container-box rounded">
            <Skills />
          </Container>
        </div>
      </div>

      {/* project timeline */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ProjectTimeline />
          </Slide>
        </Container>
      </div>

      {/* Contact */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ContactForm />
          </Slide>
        </Container>
      </div>

      <hr />
      <Footer />
    </div>
  );
}

export default App;
