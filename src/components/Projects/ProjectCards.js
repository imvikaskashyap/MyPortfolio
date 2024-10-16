import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img style={{height:"250px" , objectFit:"contain"}} variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color:"#ffb143", fontWeight:"bold", fontSize:"25px"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", marginTop:"30px" }}>
          {props.description}
        </Card.Text>

        {/* Show GitHub button only if ghLink exists */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Show Demo button only if demoLink exists */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {/* If no ghLink and no demoLink exist, show "Coming Soon..." */}
        {!props.ghLink && !props.demoLink && (
          <h3 style={{ color: "green", marginTop: "20px" }}>Coming Soon...</h3>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
