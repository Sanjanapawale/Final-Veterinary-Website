import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import { Link } from "react-router-dom";

function Service() {
  const myStyle={
    textDecoration: 'none',
    color:'white',
    justifyContent:'spacebetween',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: '50px',
    fontSize:'20px',
  }
  return (
    <>
      <Navbar />
      <Container style={{ width: "70%", marginTop: "8%" }}>
        <h2 style={{fontSize:'50px', fontWeight:'bold', fontFamily:'sans-serif'}}>Services</h2>
        <div style={{fontSize:'20px'}}>
        <p>
          Your pet's health is important to us, which is why we offer a wide
          range of veterinary services. The experienced and professional team
          will provide the care and guidance your pet needs to live a long,
          healthy, and happy life.
        </p>
        <p>
          Our services focus on prevention to minimize health issues and to
          protect your pet from harmful diseases. Our wellness care is tailored
          to each of our patients and their individual needs.
        </p>
        <p>
          Veterinary blogs are often written by professionals in the field, such
          as veterinarians or experienced animal caregivers.Reading veterinary
          blogs can help you become more educated about different aspects of
          animal health, behavior, nutrition, and care. This increased awareness
          can lead to better decision-making for your pets' well-being.blogs
          often share the latest research findings, advancements in veterinary
          medicine, and updates on emerging diseases. Staying informed about
          these developments can empower you to make informed choices.
          <br />
          You can post your blogs also.
        </p>
        <p>
          we're passionate about delivering holistic solutions that enhance the
          lives of your pets while promoting sustainability and environmental
          consciousness. Our range of veterinary products, derived from the
          goodness of animals, offers a unique blend of care, innovation, and
          responsibility.Animal-Derived Veterinary Products: Explore our
          thoughtfully curated selection of animal-derived products that cater
          to your pet's well-being and contribute to a healthier planet:<br/>1. Organic
          Pet Milk Elixir<br/>2. Nurturing Fertilizer-Coutdounge Blend<br/>3.  Bio-Paw Balm,
          <br/>4. Silky Mane Horse Shampoo
        </p>
          </div>
        <Card style={{width: "50%", marginLeft:'20%'}}>
          <CardHeader
            style={{
              backgroundColor: "#026386",
              fontSize: "25px",
              fontWeight: "bold",
              color:'white'
            }}
          >
            Consider us your partners in keeping your pet healthy for years to
            come.
          </CardHeader>
          <CardBody style={{display:'flex', backgroundColor: '#84c18f'}}>
            <div>
              <Link to="/" style={myStyle}>Advanced Care</Link><br/>
              <Link to="/" style={myStyle}>Diagnostics</Link><br/>
              <Link to="/" style={myStyle}>End of Life Care</Link><br/>
              <Link to="/" style={myStyle}>Internal Medcine</Link><br/>
                
            </div>
            <div>
              <Link to="/" style={myStyle}>Blogs for more Info</Link><br/>
              <Link to="/" style={myStyle}>Animal Products</Link><br/>
              <Link to="/" style={myStyle}>Animal-Derived Products</Link><br/>
              <Link to="/" style={myStyle}>Kittens and Puppies</Link><br/>
            </div>
          </CardBody>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default Service;
