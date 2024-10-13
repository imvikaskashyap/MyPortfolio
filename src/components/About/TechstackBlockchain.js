import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAppwrite,
  SiEthereum,
  SiExpo,
  SiSolidity,
  SiWeb3Dotjs,
} from "react-icons/si";
import { SiEthers } from "react-icons/si";

function TechstackBlockchain() {
  return (
    <Row style={{ paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Solidity">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ethereum">
        <SiEthereum />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Web3.js">
        <SiWeb3Dotjs />
      </Col>
    </Row>
  );
}

export default TechstackBlockchain;
