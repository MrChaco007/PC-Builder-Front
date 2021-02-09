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
      <Card className="card" style={{ width: "16rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1608745815/15672988_10211212030552102_7722795121537872527_n_pkzqgc.jpg"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "28px" }}>Alex Chaconas</Card.Title>
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
      <Card className="card" style={{ width: "16rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1608745815/15672988_10211212030552102_7722795121537872527_n_pkzqgc.jpg"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "28px" }}>Alex Chaconas</Card.Title>
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
      <Card className="card" style={{ width: "16rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1608745815/15672988_10211212030552102_7722795121537872527_n_pkzqgc.jpg"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "28px" }}>Alex Chaconas</Card.Title>
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
      <Card className="card" style={{ width: "16rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1608745815/15672988_10211212030552102_7722795121537872527_n_pkzqgc.jpg"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "28px" }}>Alex Chaconas</Card.Title>
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
    </div>
  );
};

export default TeamPage;
