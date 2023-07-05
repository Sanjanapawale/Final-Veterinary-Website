import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Doggy from "../Assets/6.webp";
import Lion from "../Assets/WildLifeCare.jpeg";
import Doggy2 from "../Assets/ExpertCare.jpeg";
import Blog from "../Assets/Blog.PNG";
import Ambulance from "../Assets/10.avif";
import Doggy3 from "../Assets/MarketPlace.PNG";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Dairy from "../Assets/Dairy.jpg"
import Hospital from "../Assets/Hospital.webp";
import BlogCard from "../Assets/BlogCard.PNG";
function Home() {
  return (
    <>
      <Navbar />
      <section className="blog">
        <div className="container p-0 m-0">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Doggy} alt="First slide" />
              <Carousel.Caption>
                <h3>Providing Quality Care for Your Beloved Pets.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Lion} alt="First slide" />
              <Carousel.Caption>
                <h3>
                  Compassionate Care for All Creatures, From Beloved Pets ,zoo
                  to Majestic Wildlife.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Doggy2} alt="First slide" />
              <Carousel.Caption>
                <h3>
                  Expert Care at Your Fingertips. Book a Consultation with Our
                  Skilled Veterinarians Today.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Blog} alt="Second slide" />

              <Carousel.Caption>
                <h3>
                  Empowering Knowledge, Sharing Insights. Experts Bring You
                  Engaging Blogs on Animal Health, Care, and More.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Doggy3} alt="Third slide" />

              <Carousel.Caption>
                <h3>
                  Discover Everything Your Animal Needs. From Nourishment to
                  Entertainment, We've Got You Covered
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* <div className="row">
          <div className="col-md-3">
              <div class="card">
                <img src={Ambulance} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Emergency</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <img src={Ambulance} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Hospital</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/hospitalinfo" className="btn btn-primary">More Info</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <img src={Ambulance} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Blog</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    More Info
                  </a>
                </div>
              </div>
            </div>
            </div> */}
            <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={Dairy} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Products</h5>
                  <p className="card-text">
                    We provide animal products like fat, flesh, blood, Dairy Products, eggs etc.
                  </p>
                  <a href="#" className="btn btn-primary">
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={Hospital} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Hospitals</h5>
                  <p className="card-text">
                  A VetLink Hub provides services like animal diagnosis, care, and medication. 
                  </p>
                  <a href="#" className="btn btn-primary">
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={BlogCard} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Blog</h5>
                  <p className="card-text">
                    To see the more blogs on veterinarians click on more Info.
                  </p>
                  <a href="#" className="btn btn-primary">
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <footer>
              <ul type="none">
                <div className="footer">
                <div><li className="link"><Link className="foot-link" to='/'>Home</Link></li></div>
                <div><li className="link"><Link className="foot-link" to='/about'>About</Link></li></div>
                <div><li className="link"><Link className="foot-link" to='/contact'>Contact</Link></li></div>
                <div><li className="link"><Link className="foot-link" to='/service'>Services</Link></li></div>
                <div>
                  <li className="link"><Link className="foot-link" to='/service'>Social</Link>
                  <ul type="none">
                    <li><Link className="foot-link" to='/'><i className="fa-brands fa-facebook"></i>Facebook</Link></li>
                    <li><Link className="foot-link" to='/'><i className="fa-brands fa-instagram"></i>Instagram</Link></li>
                    <li><Link className="foot-link" to='/'><i className="fa-brands fa-youtube"></i>YouTube</Link></li>
                    <li><Link className="foot-link" to='/'><i className="fa-brands fa-twitter"></i>Twitter</Link></li>
                    <li><Link className="foot-link" to='/'><i className="fa-brands fa-linkedin"></i>LinkedIn</Link></li>
                </ul>
                </li>
              </div>
                </div>
              </ul>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
