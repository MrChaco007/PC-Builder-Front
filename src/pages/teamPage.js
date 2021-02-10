import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons"
import { Card, Button, Accordion } from "react-bootstrap";
import {Link} from "react-router-dom"
const TeamPage = () => {
  return (
    <div className="team">
      <Card className="card" style={{ width: "18rem", textAlign: "center" }}>
        <div className="hover-1">
        <div className="hover-overlay">
        <Card.Img
          variant="top"
          img src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1608745815/15672988_10211212030552102_7722795121537872527_n_pkzqgc.jpg"
          alt=""
        />
        </div>
        <div className="hover-1-content">
          <h3 className="hover-1-title"><span>Colorfull</span></h3>
        </div>
        </div>
        <Card.Body>
          <Card.Title style={{ fontSize: "35px" }}>Alex Chaconas</Card.Title>
          <a className="icon-link" href="https://github.com/MrChaco007">
            <FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x" />
          </a>
          <a className="icon-link" href="https://mrchaco007.github.io/">
            <FontAwesomeIcon
              className="icon"
              id="briefcase"
              icon={faBriefcase}
              size="2x"
            />
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/alex-chaconas/"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
          </a>
          <Accordion defaultActiveKey="1">
            <Card>
              <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                Learn more about Alex
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ fontSize: "16px" }}>
                  Alex is a software developer with 4 years of marketing and
                  communications experience. He combines his rapidly evolving
                  coding potential with his exceptional soft skills to not only
                  find solutions to technical problems but also ensure
                  interpersonal conflict does not get in the way.
                  <br />
                  <br />
                  He is motivated by his appetite to get better at what he does
                  and to become a reliable asset for his team. My marketing
                  experience enables him to see how even the most robust
                  back-end logic is futile without an intuitive and appealing
                  front-end design.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dfltkqotn/image/upload/c_fill,h_254,w_254/v1612906104/IMG_6547_lvytbc_a8stcg.jpg"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "35px" }}>Adrian Mendez</Card.Title>
          <a className="icon-link" href="https://github.com/adrianmendez03">
            <FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x" />
          </a>
          <a className="icon-link" href="https://adrianmendez03.github.io/">
            <FontAwesomeIcon
              className="icon"
              id="briefcase"
              icon={faBriefcase}
              size="2x"
            />
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/adrianmendez03"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
          </a>
          <Accordion defaultActiveKey="1">
            <Card>
              <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                Learn more about Adrian
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ fontSize: "16px" }}>
                  Alex is a software developer with 4 years of marketing and
                  communications experience. He combines his rapidly evolving
                  coding potential with his exceptional soft skills to not only
                  find solutions to technical problems but also ensure
                  interpersonal conflict does not get in the way.
                  <br />
                  <br />
                  He is motivated by his appetite to get better at what he does
                  and to become a reliable asset for his team. My marketing
                  experience enables him to see how even the most robust
                  back-end logic is futile without an intuitive and appealing
                  front-end design.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dfltkqotn/image/upload/v1612905073/1608763532612_z2rmzr.jpg"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "35px" }}>Jorge Soto</Card.Title>
          <a className="icon-link" href="https://github.com/acurunner79">
            <FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x" />
          </a>
          <a className="icon-link" href="https://acurunner79.github.io/github.io/">
            <FontAwesomeIcon
              className="icon"
              id="briefcase"
              icon={faBriefcase}
              size="2x"
            />
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/jorgelsotojr"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
          </a>
          <Accordion defaultActiveKey="1">
            <Card>
              <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                Learn more about Jorge
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ fontSize: "16px" }}>
                Aspiring Full-stack web developer and professional dancer who is always looking for ways to level up in all aspects. 
                <br />
                <br />
                Passionate about applying structure in my everyday life, making me more efficient. Eager to create functional products shaped around consumer wants and needs influenced by industry-based feedback and research.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src="https://avatars.githubusercontent.com/u/75413323?s=400&u=9beccb5dd76ccdf3c7aaba2d1f120856285b26a4&v=4"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "35px" }}>Andrew Arias</Card.Title>
          <a className="icon-link" href="https://github.com/lta4">
            <FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x" />
          </a>
          <a className="icon-link" href="https://andrewarias-portfolio.netlify.app">
            <FontAwesomeIcon
              className="icon"
              id="briefcase"
              icon={faBriefcase}
              size="2x"
            />
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/andrewarias4"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
          </a>
          <Accordion defaultActiveKey="1">
            <Card>
              <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                Learn more about Andrew
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ fontSize: "16px" }}>
                  Andrew is a Software Developer who was born and raised in Los Angeles. Now residing in San Diego, he has committed 6 years to the Financial Service Industry and another 6 too the Food and Beverage Hospitality Industry.
                  <br />
                  <br />
                  With his newly aquired skills in HTML, CSS, JavaScript, and React, he strives to implement a soft, clean touch with great responsiveness and color pop. Simple and reliability are dynamics he enjoys, in order make a proper statement. It really is the simple things that stand out!
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamPage;
