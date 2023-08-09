import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Doggy from "../../Assets/6.webp";
import Lion from "../../Assets/WildLifeCare.jpeg";
import Doggy2 from "../../Assets/ExpertCare.jpeg";
import Blog from "../../Assets/Blog.PNG";
import Doggy3 from "../../Assets/MarketPlace.PNG";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Dairy from "../../Assets/Dairy.jpg";
import Hospital from "../../Assets/Hospital.webp";
import BlogCard from "../../Assets/BlogCard.PNG";
import { Container } from "reactstrap";
function Home() {
  const borderStyle = {
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
  };
  const border = {
    border: "1px solid black",
    borderRadius: "30px",
    paddingBottom: "25px",
    height: "85%",
  };
  const cardMargin = {
    marginLeft: "15px",
    marginTop: "15px",
  };
  return (
    <>
      <Navbar />
      <section>
        <div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block" src={Doggy} alt="First slide" />
              <Carousel.Caption>
                <h3>Providing Quality Care for Your Beloved Pets.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={Lion} alt="First slide" />
              <Carousel.Caption>
                <h3>
                  Compassionate Care for All Creatures, From Beloved Pets ,zoo
                  to Majestic Wildlife.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
              <img className="d-block" src={Doggy2} alt="First slide" />
              <Carousel.Caption>
                <h3>
                  Expert Care at Your Fingertips. Book a Consultation with Our
                  Skilled Veterinarians Today.
                </h3>
              </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
              <img className="d-block" src={Blog} alt="Second slide" />

              <Carousel.Caption>
                <h3>
                  Empowering Knowledge, Sharing Insights. Experts Bring You
                  Engaging Blogs on Animal Health, Care, and More.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={Doggy3} alt="Third slide" />

              <Carousel.Caption>
                <h3>
                  Discover Everything Your Animal Needs. From Nourishment to
                  Entertainment, We've Got You Covered
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Container>
            <h2 style={{ color: "brown", marginLeft: "35%",marginTop:'5%' }}>
              Our Vision And Mission
            </h2>
            <br />
            <h4>Vision:</h4>
            <br />
            <p style={{ fontSize: "20px" }}>
              To create a comprehensive and user-friendly online platform that
              serves as a trusted source of information, resources, and
              community for pet owners and veterinary professionals alike,
              fostering a healthier and happier life for animals.
            </p>
            <h4>Mission</h4>
            <br />
            <p style={{ fontSize: "20px" }}>
              Our mission is to provide accurate, up-to-date, and easily
              accessible information about pet care, health, and well-being,
              while also offering a platform for veterinarians to connect,
              collaborate, and share their expertise. Through our website, we
              aim to promote responsible pet ownership, enhance veterinary
              knowledge, and ultimately improve the overall welfare of animals
              around the world.
            </p>
          </Container>
          <div className="row">
            <div className="col-md-3">
              <div className="card1" style={border}>
                <img
                  src={Dairy}
                  className="card-img-top"
                  alt="..."
                  style={borderStyle}
                />
                <div className="card-body">
                  <h5 className="card-title" style={cardMargin}>
                    Products
                  </h5>
                  <p className="card-text" style={cardMargin}>
                    we're passionate about delivering holistic solutions that enhance the
          lives of your pets while promoting sustainability and environmental
          consciousness.
                  </p>
                  <a
                    href="/productscategory"
                    style={cardMargin}
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card1" style={border}>
                <img
                  src={Hospital}
                  className="card-img-top"
                  alt="..."
                  style={borderStyle}
                />
                <div className="card-body">
                  <h5 className="card-title" style={cardMargin}>
                    Hospitals
                  </h5>
                  <p className="card-text" style={cardMargin}>
                    Here you can check multiple hospitals, doctor details and
                    book your appointment.
                    <br /> To checkout more information please visit following
                    link
                  </p>
                  <a href="/hospitalinfo"><p style={cardMargin}>
                    More Info
                  </p></a>
                  
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card1" style={border}>
                <img
                  src={BlogCard}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "58%",
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={cardMargin}>
                    Blog
                  </h5>
                  <p className="card-text" style={cardMargin}>
                  These blogs are often written by professionals in the field, such
          as veterinarians or experienced animal caregivers.
                  </p>
                  <a href="#" style={cardMargin}>
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Home;
