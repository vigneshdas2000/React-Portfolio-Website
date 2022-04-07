import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificatesCard from "./CertificatesCard";
import Particle from "../Particle";
import iot from "../../Assets/Certificates/iot.png";
import java1 from "../../Assets/Certificates/java1.png";
import java2 from "../../Assets/Certificates/java2.png";
import html from "../../Assets/Certificates/html.png";
import css from "../../Assets/Certificates/css.png";
import advanced from "../../Assets/Certificates/advanced.png";

function Certificates() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Certificates</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few certificates which I achieved during my B.Tech course.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <CertificatesCard
                imgPath={iot}
                isBlog={false}
                title="Internet of Things"
                Platform="NIEDC"
                description="worked on Arduino and Light,Motion Temperature,Humidity,Moisture sensor as well as servo motor"
                link="https://drive.google.com/file/d/1qvHwhDQ3ffIvS1PfRiChcbcCdYQtktmg/view?usp=sharing"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <CertificatesCard
                imgPath={java1}
                isBlog={false}
                title="Java Test"
                Platform="Spoken Tutorial Project,IIT Bombay"
                description="completed Java test by securing 94%"
                link="https://drive.google.com/file/d/1M_7JhWZ_BEthCah84ZmMBHftcmptzG0Q/view?usp=sharing"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <CertificatesCard
                imgPath={java2}
                isBlog={false}
                title="Java Programming: Solving Problems with Software"
                Platform="Coursera : Duke University"
                description="Learned how to solve programming problems with Java language"
                link="https://drive.google.com/file/d/1mBKfZHqA4RReG0_L8vqDJJHjdMQY1CWT/view?usp=sharing"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificatesCard
                imgPath={html}
                isBlog={false}
                title="Introduction to HTML5"
                Platform="Coursera : University of Michigan"
                description="Learned HTML5 in details and how to use it in website"
                link="https://drive.google.com/file/d/1ii-9Vve9BmUMp2_2VcOHR_PnacvMnnR3/view?usp=sharing"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificatesCard
                imgPath={css}
                isBlog={false}
                title="Introduction to CSS3"
                Platform="Coursera : University of Michigan"
                description="Learned CSS3 in details and how to use it in website"
                link="https://drive.google.com/file/d/1fvE6g4ujw9woDZ1PL-LgUr5K8L-r4f1K/view?usp=sharing"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificatesCard
                imgPath={advanced}
                isBlog={false}
                title="Advanced Styling with Responsive Design"
                Platform="Coursera : University of Michigan"
                description="Learned how to make a website responsive and attractive using CSS3 and HTML5"
                link="https://drive.google.com/file/d/1QU2ksJNXvyBv749vH7Lpc349lh7W8Fix/view?usp=sharing"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

  export default Certificates;