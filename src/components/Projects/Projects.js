import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tfm from "../../Assets/Projects2/tfm.png";
import arena from "../../Assets/Projects2/91Arena.png";
import busyToddler from "../../Assets/Projects2/busyToddler.png";
import cpd from "../../Assets/Projects2/cpd.png";
import textify from "../../Assets/Projects2/textify.png";
import heliverse from "../../Assets/Projects2/heliverse.png"
import ryde from "../../Assets/Projects2/ryde.png";
import lms from "../../Assets/Projects2/LMS.png"
import aora from "../../Assets/Projects2/aora.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          All <strong className="purple">Projects </strong>
        </h1>

        <Row style={{  paddingBottom: "10px" }}>
          {/* Freelance Projects */}
          <h3
            style={{
              textAlign: "left",
              marginTop: "60px",
              marginLeft: "20px",
              color: "white",
            }}
          >
            Freelance <strong className="purple"> Projects: </strong>{" "}
          </h3>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tfm}
              isBlog={false}
              title="TFM - The Fuel Media"
              description="This is a digital marketing website with awesome UI.This app offers Testimonial showcase, detailed service overview, easy contact form, comprehensive FAQ section,all presented with an engaging and modern user interface."
              // ghLink={false}
              demoLink="https://www.thefuelmedia.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cpd}
              isBlog={false}
              title="CPD - Career & Skills"
              description="This platform offers both User and Admin panels, providing versatile functionality. Users can purchase courses, access their personalized dashboard, and update their profiles. The Admin panel allows for seamless management of courses, users, and admins, ensuring efficient control and oversight."
              // ghLink={false}
              demoLink=" https://cpd-imvikaskashyap.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={busyToddler}
              isBlog={false}
              title="Busy Toddler - Kid's play items booking app"
              description="Busy Toddler is a kid's play items booking app where users can conveniently book play items for children's events. Users can browse product details, add items to the cart for easy checkout, and fill out a 'Contact Us' form. The form data is automatically saved in Google Sheets, and the admin is notified via Gmail for seamless communication."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://busy-toddler-2.vercel.app/
"
            />
          </Col>

             {/* Mobile App Projects */}

             <h3
            style={{
              textAlign: "left",
              marginTop: "60px",
              marginLeft: "20px",
              color: "white",
            }}
          >
            Mobile App <strong className="purple"> Projects: </strong>{" "}
          </h3>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aora}
              isBlog={false}
              title="Aora"
              description="It offers seamless user authentication, video uploads with thumbnails, and the ability to watch, like, dislike, and bookmark videos. The app features a sleek, responsive UI powered by NativeWind, with backend support from Appwrite for handling user data and video storage"
              ghLink="https://github.com/imvikaskashyap/Aora_App---React_Native_Expo"
              demoLink="https://expo.dev/preview/update?message=bug%20fix&updateRuntimeVersion=1.0.0&createdAt=2024-10-10T17%3A14%3A46.087Z&slug=exp&projectId=65018bda-5b36-4c5a-a9d1-442ea59952f1&group=3b6e773c-7a97-48a7-a058-fcb3cc5378a0"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ryde}
              isBlog={false}
              title="Ryde - Car Booking App"
              // description="Coming Soon..."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* Academic Projects */}

          <h3
            style={{
              textAlign: "left",
              marginTop: "60px",
              marginLeft: "20px",
              color: "white",
            }}
          >
            Academic <strong className="purple"> Projects: </strong>{" "}
          </h3>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heliverse}
              isBlog={false}
              title="Heliverse"
              description="Developed a comprehensive user management application with advanced features such as filtering, searching, and pagination. Users can create and view teams based on unique criteria"
              ghLink="https://github.com/imvikaskashyap/frontend-Heliverse"
              demoLink="https://frontend-heliverse.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arena}
              isBlog={false}
              title="91 Arena"
              description="Search smartphones by newly added models, brand, specifications, name, and price range, read informative blogs, compare different smartphones, and view recommended devices."
              ghLink="https://github.com/imvikaskashyap/91Arena"
              demoLink="https://91-arena.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textify}
              isBlog={false}
              title="Textify - A text editor"
              description="Convert text to uppercase or lowercase, clear text, copy text, remove extra spaces, count words and letters, preview text, and track reading frequency"
              ghLink="https://github.com/imvikaskashyap/TextifyByReact"
              demoLink=" https://textifybyvk.netlify.app/"
            />
          </Col>

         {/* Academic Projects */}

         <h3
            style={{
              textAlign: "left",
              marginTop: "60px",
              marginLeft: "20px",
              color: "white",
            }}
          >
            Current <strong className="purple"> Projects: </strong>{" "}
          </h3>
          <p style={{ color: "white", textAlign: "left", marginLeft: "20px" }}>
          Here are a few projects I'm working on.
        </p>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="LMS - A Learning Management System"
              description="A comprehensive Learning Management System (LMS), similar to Udemy, currently in development. The platform offers `JWT-based authentication` with auto logout after 3 days, `OTP verification`, password reset, and secure payments via `Stripe`. Users can browse free courses, purchase courses for full access, ask questions, and receive admin responses via `email or dashboard notifications`. A `chatbot` is integrated for assistance, and users are notified of key activities, such as course purchases or completions. The `Admin panel` manages courses, user queries, and platform operations."
              // ghLink="https://github.com/imvikaskashyap/frontend-Heliverse"
              // demoLink="https://frontend-heliverse.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
