import React from 'react';
import './ProductsCategoryStyle.css';
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import ProductCard from './ProductCard';
import Dairy from '../../../Assets/Dairy.webp';
import Fertilizer from '../../../Assets/Fertilizer.PNG';
import Honey from '../../../Assets/Honey.jpg';
import Leather from '../../../Assets/Leather.avif';

const VeterinaryProducts = () => {
  return (
    <>
   <div style={{display:'flex'}}>
    <Navbar/>
        <div className="productContainer" style={{display:'flex', marginTop:'8%', marginLeft:'10%', justifyContent:'space-around'}}>
        <ProductCard
          title="Dairy Products"
          description="These products are generally made by milk."
          imageSrc={Dairy}
          linkTo="/veterinaryproducts"
        />
        <ProductCard
          title="Fertilizers"
          description="It includes the products that for farming"
          imageSrc={Fertilizer}
          linkTo="/derivedproducts"
        />
        <ProductCard
          title="Edible Products"
          description="Used for eating purpose"
          imageSrc={Honey}
          linkTo="/veterinaryproducts"
        />
        <ProductCard
          title="leather products"
          description="Products made by Animal Skin."
          imageSrc={Leather}
          linkTo="/derivedproducts"
        />
        </div>
   </div>
   <Footer/>
   </>
  );
};

export default VeterinaryProducts;
