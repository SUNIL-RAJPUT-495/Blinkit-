import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  return (
    <Container>
      {/* Banner Image */}
      <Row>
        <Col>
          <img src="/Home/Group-33704.webp" alt="group" className="w-100" />
        </Col>
      </Row>

      {/* Category Images */} 
      <Row className="  pt-4">
        <Col xs="auto">
          <a href="#" className="p-2">
            <img
              src="/Home/pharmacy-WEB.avif"
              alt="Pharmacy"
              style={{ height: "180px" }}
            />
          </a>
        
          <a href="#" className="p-2">
            <img
              src="/Home/babycare-WEB.avif"
              alt="Baby Care"
              style={{ height: "180px" }}
            /></a>
        
          <a href="#" className="p-2">
            <img
              src="/Home/Pet-Care_WEB.avif"
              alt="Pet Care"
              style={{ height: "180px" }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};