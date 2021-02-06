import React from 'react';

// React-Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// Assets import
import ProfileImg from "../../assets/imgs/profileimg/profileImg.jpg";

// Style
import "./style.css";

const About = () => {
 return (
  <div id="about">
   <div className="className">
    <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
    <Container>
      <Row className="pt-3 pb-5 align-items-center">

       {/* Profile Image */}
        <Col xs={12} md={6}>
           <Row className="justify-content-center mb-2 mr-2">
               <Image className="profile justify-content-end" src={ProfileImg} thumbnail fluid/>
           </Row>
        </Col>

        {/* About description */}
        <Col xs={12} md={6}>
         {/* Description*/}
          <Row className="align-items-start p-2 my-details rounded">
              Hi there! I am <strong>&nbsp;Alvin Kariuki</strong>
                <br />A passionate programmer born and brought up in Kenya. I am a Full Stack Web Developer with React.js, Redux, Express.js, Vue.js, Node.js, MongoDB and Laravel as my tech stack. I also do machine learning projects, with knowledge pertaining to pandas, numpy, sklearn, tflearn, tensorflow python libraries.
                <br />
                <br />
                 Currently in my 4th year in Strathmore University pursuing my BSC in Computer Science.
                <br />

                <br />I love learning about new technologies, what problems are they solving and How I can use them to build better and scalable products.
                <br /> <br />
          </Row>

           
           <Row>
            {/* Button Links*/}
            <Col className="d-flex justify-content-center flex-wrap">
              <div>
                 <a href="#contact">
                   <Button className="m-2" variant="outline-primary">Contact me </Button>
                 </a>
              </div>

              <div>
                 <a href="https://drive.google.com/file/d/1bP2-YdAF6hfI2ZvsY4sdMXKaZ074jO6c/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                   <Button  className="m-2" variant="outline-success">My resume</Button>
                 </a>
              </div>

              <div>
                 <a href="https://github.com/Alvinkariuki" target="_blank" rel="noopener noreferrer">
                   <Button className="m-2" variant="outline-dark">Github</Button>
                 </a>
              </div>

              <div>
                 <a href="https://linkedin.com/in/alvin-chege-a87196198" target="_blank" rel="noopener noreferrer">
                   <Button className="m-2" variant="outline-info">Linked In</Button>
                 </a>
              </div>
            </Col> 
          </Row>
        </Col>
      </Row>
    </Container>
 </div>
</div>
 )
}

export default About
