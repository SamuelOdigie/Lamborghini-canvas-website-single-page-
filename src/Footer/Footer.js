import React from "react";

const Footer = () => {
  return (
    <footer class="bg-dark text-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>About Us</h5>
            <p>
              Our Lamborghini Canvas Store is dedicated to bringing the thrill
              and excitement of the world-renowned luxury sports car brand to
              your home through stunning canvas prints.
            </p>
          </div>
          <div class="col-md-4">
            <h5>Contact Us</h5>
            <ul class="list-unstyled">
              <li>
                <i class="fas fa-map-marker-alt"></i> Central London
              </li>
              <li>
                <i class="fas fa-phone"></i> +44 7718282728
              </li>
              <li>
                <i class="fas fa-envelope"></i> samodigie98@gmail.com
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Follow Us</h5>
            <ul class="list-unstyled">
              <li>
                <a href="/">
                  <i class="fab fa-facebook"> CarGalore</i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fab fa-twitter"> CarGalore</i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fab fa-instagram"> CarGalore</i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fab fa-youtube"> CarGalore</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
