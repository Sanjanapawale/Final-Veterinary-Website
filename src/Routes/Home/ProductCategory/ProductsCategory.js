import React from 'react';
import ProductCard from './ProductCard';
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { Card, CardBody, CardHeader } from 'reactstrap';
import AnimalDerived from '../../../Assets/AnimalDerived.jpg'
import UsefulForAnimal from '../../../Assets/UsefulForAnimal.jpg'

function ProductsCategory(){
  return (
    <>
    <div style={{display:'flex'}}>
      <Navbar/>
      <Card style={{width:'50%', marginLeft:'25%', marginTop:'8%'}}>
        <CardHeader>
        <h1>Animal Products</h1>
        </CardHeader>
        <CardBody style={{display:'flex', marginLeft:'90px'}}>
        <ProductCard
          title="Veterinary Products"
          description="Products derived from animals."
          imageSrc={AnimalDerived}
          linkTo="/veterinaryproducts"
        />
        <ProductCard
          title="Useful Products for Animals"
          description="Products that are helpful for the well-being of animals."
          imageSrc={UsefulForAnimal}
          linkTo="/derivedproducts"
        />
        </CardBody>
      </Card>
    </div>
    <Footer/>
    </>
  );
}

export default ProductsCategory;
