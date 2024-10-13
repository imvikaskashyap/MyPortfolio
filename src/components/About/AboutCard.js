import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Vikas Kashyap </span>
            from <span className="purple"> Rampur, UP, India.</span>
            <br />
            I am currently employed as a software developer at "The Tann Mann Gaadi".
            <br />
            I successfully completed a comprehensive 465-day Full Stack Program in 2022 through Relevel by Unacademy. Following this program, I joined Flynaut SaaS Private Limited as a Software Developer Intern, and subsequently transitioned to NUK9 Information as a Software Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Posts
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vikas Kashyap</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
