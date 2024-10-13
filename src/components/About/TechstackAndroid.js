import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAppwrite, SiExpo } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function TechstackAndroid() {
  return (
    <Row style={{ paddingBottom: "20px" }}>
      <Col xs={4} md={2} className="tech-icons" title="React Native">
        <TbBrandReactNative />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Appwrite">
        <SiAppwrite />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React Native Expo">
        <SiExpo />
      </Col>
    </Row>
  );
}

export default TechstackAndroid;
