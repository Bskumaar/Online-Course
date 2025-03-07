import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/page/Hairing.css";


function Hairing({ img, name, sub, com, lpa }) {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={img} className="card-img" />
      <Card.Body className="text-center">
        <Card.Title className="name">{name}</Card.Title>
        <Card.Text className="role">{sub}</Card.Text>
        <Card.Text className="company">{com}</Card.Text>
        <Card.Text className="salary">{lpa}</Card.Text>
      
      </Card.Body>
    </Card>
  );
}

export default Hairing;
