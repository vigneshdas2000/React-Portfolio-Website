import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Crypto Price Tracking App"
              techstack="React Native,Firebase,Node"
              description="Mobile app that shows current market price of cryptocurrency also with price change percentage and graph. This app also features Firebase login and signup authentication."
              link="https://github.com/vigneshdas2000/Cryptocurrency-Price-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Personal Portfolio"
              techstack="HTML,CSS,Bootstrap"
              description="My personal portfolio that displays my profile achievements "
              link="https://github.com/vigneshdas2000/vigneshdas2000.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Personal Portfolio"
              techstack="React js,CSS,Bootstrap"
              description="My personal portfolio that displays my profile achievements and about myself"
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
