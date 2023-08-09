import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

const DerivedProducts = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Useful Products for Animals</Card.Title>
        <Card.Text>
          Products that are helpful for the well-being of animals.
        </Card.Text>
        <a href="/useful-products" className="btn btn-primary">
          Explore Useful Products
        </a>
      </Card.Body>
    </Card>
  );
};

export default DerivedProducts;
