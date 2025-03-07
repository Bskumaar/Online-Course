import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Popularcourse({img,name}) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top"src= {img} />
      <Card.Body>
        <Card.Title> <h3 className='text-center'> {name}</h3></Card.Title>
       
      </Card.Body>
    </Card>
  )
}

export default Popularcourse
