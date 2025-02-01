import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/apex.png";
import projImg2 from "../assets/img/ben.png";
import projImg3 from "../assets/img/keyboards.png";
import projImg4 from "../assets/img/bees.png";
import projImg5 from "../assets/img/foundation.png";
import projImg6 from "../assets/img/celtic.png";
import projImg7 from "../assets/img/cheshunt.png";
import projImg8 from "../assets/img/circular.png";
import projImg9 from "../assets/img/cj.png";
import projImg10 from "../assets/img/cc.png";
import projImg11 from "../assets/img/cushions.png";
import projImg12 from "../assets/img/dyelution.png";
import projImg13 from "../assets/img/edu.png";
import projImg14 from "../assets/img/paper.png";
import projImg15 from "../assets/img/every.png";
import projImg16 from "../assets/img/escrowity.png";
import projImg17 from "../assets/img/food.png";
import projImg18 from "../assets/img/Fortis Media landing Page.png";
import projImg19 from "../assets/img/Yamm Buffet Landing Page.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Apex Solutions Group",
      description: "WordPress Development & SEO Optimization",
      imgUrl: projImg1,
      category: "first",
    },
    {
      title: "Ben Catling Photography",
      description: "Custom WordPress Theme Design & SEO Services",
      imgUrl: projImg2,
      category: "first",
    },
    {
      title: "Best Keyboards",
      description: "E-commerce Website Development & SEO Strategy",
      imgUrl: projImg3,
      category: "first",
    },
    {
      title: "Brighouse Bees",
      description: "Responsive Web Design & Local SEO",
      imgUrl: projImg4,
      category: "first",
    },
    {
      title: "Buckswood Foundation",
      description: "Website Redesign & Performance Optimization",
      imgUrl: projImg5,
      category: "first",
    },
    {
      title: "Celtic UPVC",
      description: "WordPress Development & Search Engine Optimization",
      imgUrl: projImg6,
      category: "first",
    },
    {
      title: "Cheshunt Mini Lops & Teddies",
      description: "Website Development & SEO for Niche Market",
      imgUrl: projImg7,
      category: "first",
    },
    {
      title: "Circular Refining",
      description: "SEO Strategy & Performance Enhancements for Industrial Website",
      imgUrl: projImg8,
      category: "first",
    },
    {
      title: "CJ Contractors Co",
      description: "Business Website Design & SEO Optimization",
      imgUrl: projImg9,
      category: "second",
    },
    {
      title: "CC Events",
      description: "Event Website Development & SEO Strategy",
      imgUrl: projImg10,
      category: "second",
    },
    {
      title: "Signature Bedding",
      description: "E-commerce Web Design & SEO for Product Visibility",
      imgUrl: projImg11,
      category: "second",
    },
    {
      title: "Dyelution",
      description: "Custom WordPress Website Design & SEO Implementation",
      imgUrl: projImg12,
      category: "second",
    },
    {
      title: "Edu Experts Wing",
      description: "Educational Website Development & SEO for Visibility",
      imgUrl: projImg13,
      category: "second",
    },
    {
      title: "Fashion Paper",
      description: "Fashion Website Development & Local SEO for Traffic Growth",
      imgUrl: projImg14,
      category: "second",
    },
    {
      title: "Every CC",
      description: "Business Web Development & SEO Optimization",
      imgUrl: projImg15,
      category: "second",
    },
    {
      title: "Escrowity",
      description: "Web Development & SEO Strategy for Financial Website",
      imgUrl: projImg16,
      category: "second",
    },
    {
      title: "Food Land Shop",
      description: "E-commerce Web Design & SEO for Online Sales",
      imgUrl: projImg17,
      category: "third",
    },
    {
      title: "Fortis Media",
      description: "Media Website Development & SEO Optimization",
      imgUrl: projImg18,
      category: "third",
    },
    {
      title: "Yamm Buffet",
      description: "Restaurant Website Design & SEO for Local Reach",
      imgUrl: projImg19,
      category: "third",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have had the privilege of working on a variety of projects, primarily focusing on WordPress development and SEO optimization. Each project reflects my dedication to creating high-performance websites that are not only visually appealing but also search-engine optimized for better visibility and user experience.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                   <Tab.Pane eventKey="first"><Row>
                      {
              projects.filter(project => project.category === "first").map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    {...project}
                  />
                )
              })
            }
        </Row>
    </Tab.Pane>
    <Tab.Pane eventKey="second">
        <Row>
            {
              projects.filter(project => project.category === "second").map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    {...project}
                  />
                )
              })
            }
        </Row>
    </Tab.Pane>
    <Tab.Pane eventKey="third">
        <Row>
            {
              projects.filter(project => project.category === "third").map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    {...project}
                  />
                )
              })
            }
        </Row>
    </Tab.Pane>
</Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
