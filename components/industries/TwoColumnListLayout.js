import React from 'react';
import { Row, Col, Container, ListGroup } from 'react-bootstrap';

const TwoColumnLayout = ({ title, howWeHelp, insight, image }) => (
  <Container className="py-5">
    <h2 className="text-primary mb-4">{title}</h2>
    <p>{howWeHelp}</p>
    <Row>
      <Col md={6}>
        <ListGroup>
          {insight[0].column1.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col md={6}>
        <ListGroup>
          {insight[0].column2.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
    <img src={image} alt={title} className="img-fluid mt-4" />
  </Container>
);

export default TwoColumnLayout;
