import React from 'react';
import './App.css';
import { MdCall,MdMail } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';
import { FaUserGraduate,FaUserTie,FaLaptopCode,FaBook,FaRegAddressBook,FaTrophy,FaFacebook,FaLinkedin,FaGithub, FaYoutube,FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, Button,Popover,OverlayTrigger,Form } from 'react-bootstrap';


const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h2">Contact Info</Popover.Title>
    <Popover.Content>
       <strong><MdMail size="25px"/> Email: </strong>dravidmani1998@gmail.com <br />
       <strong><MdCall size="25px"/> Phone no: </strong>+91 8667477046
    </Popover.Content>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="primary">Contact</Button>
  </OverlayTrigger>
);


function App() {
  return (
    <div>
    <div className="container" >
     
      <Navbar bg="light" expand="lg" fixed="top" >
          <Navbar.Brand href="#home">Dravid R.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#objective">Objective</Nav.Link>
              <Nav.Link href="#skill">Skills </Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#achivement">Achivements</Nav.Link>
              <Nav.Link href="#about">AboutUs</Nav.Link>
              <Nav.Link href="#contact">ContactUs</Nav.Link>
            </Nav>
          </Navbar.Collapse>    
      </Navbar>
      
      
      <div id="home">
        <br /><br /><br />
        <div className="row">
          <div className="col-sm-5"><h1>Hello..! <br />I am <b>Dravid R.</b> <br /><Example /></h1> 
          </div>
          <div className="col-sm-7"><img src="photo.jpeg" alt="image"/></div>
        </div>
      </div>
      <div className="icon">
      <a href="https://www.facebook.com/dravid.manigandan/"><FaFacebook size="30px"/></a>
        <a href="https://www.linkedin.com/in/dravid2407/"><FaLinkedin size="30px"/></a>
        <a href="https://github.com/Dravid24/"><FaGithub size="30px"/></a>
        <a href="https://www.youtube.com/channel/UCDw0zwDjygXdJt8MQ3GS0lw"><FaYoutube size="30px"/></a>
        <a href="https://www.instagram.com/?hl=en"><FaInstagram size="30px"/></a>
      </div>
      <hr />



       <div id="objective" className="content">
         <br /><br /><br />
        <header><h1><GiGraduateCap/> &nbsp; Career Objective</h1></header>
        <h5>As a fresher the career objective is to secure a challenging position in an organization where I
can effectively contribute with utmost dedication and commitment so as to grow with the
organization as a professional with a possessing competent technical skills.</h5>
      </div>
      <hr />




       <div id="skill"  className="content">
       <br /><br /><br />
        <header><h1><FaLaptopCode/> &nbsp; Skills</h1></header>
        <h3>IT PROFICIENCY</h3>
        <ul>
          <li><b>Programming Language: </b>C, C++, Java.</li>
          <li><b>Web Technologies: </b>HTML5, CSS3, Javascript, Bootstrap, Reactjs, Wordpress.</li>
          <li><b>Database: </b>MySQL, Oracle, PostgreSQL.</li>
          <li><b>Image & video editing: </b>Adobe Photoshop, Adobe Aftereffects. </li>
        </ul>
        <h3>PERSONAL QUALITIES</h3>
        <ul>
          <li>Good Leadership Skills.</li>
          <li>Logical Thinker.</li>
          <li>Confident and Determined.</li>
          <li>Passionate toward adapting new technologies</li>
        </ul>
      </div>
      <hr />

      <div id="education"  className="content">
      <br /><br /><br />
        <header><h1><FaUserGraduate/> &nbsp; Education</h1></header>
        
          <h3>C.Abdul Hakeem College of Engineering and Technology</h3>
          <text>2016 - 2020</text>
          <h5>Bachelor of Engineering in Computer Science and Engineering<br />(CGPA:7.45)</h5>
          
          <br />
          <h3>GVC Hr.Sec.School</h3>
          <text>2016</text>
          <h5>HSC (74%)</h5>
          <br />
          <h3>Islamiah Boys Hr.Sec.School</h3>
          <text>2014</text>
          <h5>SSLC (82%)</h5>  
      </div>
      <hr />

      
      <div id="projects"  className="content">
      <br /><br /><br />
        <header><h1><FaBook/>&nbsp; Projects</h1></header>
        <ul>
          <li>
          <h4>Detect Classification of Schizophrenic Conversation based on Machine Learning.</h4>The main goal of this proposed application is to classify schizophrenic and non schizophrenic using verbal content generated from the respective person. We utilized NLP to automatically evaluate the interview recordings of schizophrenic patients and healthy control subjects.
          </li>
          <br />
          <li>
            <h4>Responsive Weather web App using React.</h4>It will show exact City name, Current temperature, Description based on temperature, Icon based in temperature.
          </li>
        </ul>
      </div> 
      <hr />

      
      <div id="achivement"  className="content">
      <br /><br /><br />
        <header><h1><FaTrophy/>&nbsp; Achivements</h1></header> 
            <h4>Won second prize for web designing on “ADDICT2K18v6.o” in P.A College of Engineering and
Technology, Pollachi.</h4>(2018)
          <br /> <br />
          <h4>Won second prize on hockey zonal level at Vellore District.</h4>(2019)
          
      </div>
      <hr />
      
      
      <div id="about"  className="content">
      <br /><br /><br />
          <header><h1><FaUserTie /> &nbsp;About</h1></header> 
          <div className="row">
            <div className="col-sm-5"><img src="photo.jpeg" alt="image"/></div>
            <div className="col-sm-7">
                <p>
                  <h2>I am Dravid</h2>
                  <b>Date Of Birth:</b> July 24,1998 <br /> 
                  <b>Age:</b> 22 <br />
                  <b>Gender:</b> Male <br />
                  <b>Birth Place:</b> Tamilnadu, India.
                </p>
            </div>
          </div>
      </div>
      <hr />
      
      <div id="contact"  className="content">
      <br /><br /><br />
          <header><h1><FaRegAddressBook /> &nbsp; Contact</h1></header>
          <Form >
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required/>
            </Form.Group> 
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address*</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" required/>
            </Form.Group> 
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </div>
      <br />
      </div> 
      <div className="footer">
        <h2>Dravid R.</h2>
        <a href="https://www.facebook.com/dravid.manigandan/"><FaFacebook size="20px"/></a>
        <a href="https://www.linkedin.com/in/dravid2407/"><FaLinkedin size="20px"/></a>
        <a href="https://github.com/Dravid24/"><FaGithub size="20px"/></a>
        <a href="https://www.youtube.com/channel/UCDw0zwDjygXdJt8MQ3GS0lw"><FaYoutube size="20px"/></a>
        <a href="https://www.instagram.com/?hl=en"><FaInstagram size="20px"/></a>
        <p>Copyright 2020 All rights reserved. Developed by Dravid.</p>
      </div>
    </div>
  );
}

export default App;
