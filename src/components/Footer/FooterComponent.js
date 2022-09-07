import { Link } from 'react-router-dom';
import { Facebook, Instagram } from "@material-ui/icons";

const FooterComponent = () => {
    return (
        <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Link to="about">
                <h6>About</h6>
              </Link>
              <p className="text-justify">
                Eden Sign is an initiative to help the parlours and salon across
                the country to be listed at one single platform. Helping the
                customers to easily find the perfect salon as per their needs
                and requirements.
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Services</h6>
              <ul className="footer-links">
                <li>Promotion</li>
                <li>Booking</li>
                <li>Branding</li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Contact Us</h6>
              <p>
                <a href="mailto:sales@edensign.in">sales@edensign.in</a>
              </p>
              <ul className="social-icons">
                <li><a target="_blank" className="facebook" href="https://www.facebook.com/fb.edensign.in" rel="noreferrer"><Facebook /></a></li>
                {/* <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li> */}
                <li>
                  <a target="_blank" className="instagram" href="https://www.instagram.com/edensign.in/" rel="noreferrer">
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-6">
              <span className="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by{" "}
                <a href="http://edensign.in"> Eden Sign</a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default FooterComponent;