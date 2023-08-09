import React from "react";
import './Footer.css';
import{FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaComment} from "react-icons/fa";

function Footer(){
    return(
            <div className="footer">
              <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                  <div className="sb__footer-links_div">
                    <h4>About</h4>
                    <p>This is the VETLINK HUB website.</p>
                  </div>
                  <div className="sb__footer-links_div">
                    <h4>Links</h4>
                    <a href="/" className="astyle"><p>Home</p></a>
                    <a href="/about" className="astyle"><p>About</p></a>
                    <a href="/about" className="astyle"><p>Services</p></a>
                    <a href="/contact" className="astyle"><p>Contact</p></a>
                  </div>
                  <div className="sb__footer-links_div">
                    <h4>Services</h4>
                    <a href="/" className="astyle"><p>Home page</p></a>
                    <a href="/about" className="astyle"><p>About page</p></a>
                    <a href="/contact" className="astyle"><p>Contact page</p></a>
                  </div>
                  <div className="sb__footer-links_div">
                    <h4>Have a Question?</h4>
                    <p><FaMapMarkerAlt/>Pune, India</p>
                    <p><FaPhoneAlt/>+91 7722031638</p>
                    <p><FaEnvelope/>info@vetlinkhub.com</p>
                    <p><FaComment/>FAQs</p>
                  </div>
                  <div className="sb__footer-links_div">
                    <h4>Coming soon on</h4>
                    <div className="socialmedia">
                    <p><FaFacebook/></p>
                    <p><FaTwitter/></p>
                    <p><FaLinkedin/></p>
                    <p><FaInstagram/></p>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                  <div className="sb__footer-copyright">
                    <p>@{new Date().getFullYear()} vetlinkhub. All right reserved.</p>
                  </div>
                  <div className="sb__footer-below-links">
                    <div><p>Terms & Conditions</p></div>
                    <div><p>Privacy</p></div>
                    <div><p>Security</p></div>
                    <div><p>Cookie Declaration</p></div>
                  </div>
                </div>
              </div>
            </div>
    );
}

export default Footer;