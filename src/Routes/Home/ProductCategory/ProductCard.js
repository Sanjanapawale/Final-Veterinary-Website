import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const ProductCard = ({ title, description, imageSrc, linkTo }) => {
  return (
    <Card style={{ width: '18rem', height:'22rem', marginRight:'20px' }}>
      <Link to={linkTo} style={{textDecoration: 'none', color:'black'}}>
        <Card.Img variant="top" src={imageSrc} alt={title} />
        <Card.Body>
          <Card.Title style={{fontSize:'27px', marginTop:'15px'}}>{title}</Card.Title>
          <Card.Text style={{fontSize:'20px', marginTop:'15px'}}>{description}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProductCard;
