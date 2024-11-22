import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5">
      <div className="container">
        <h5 className="p-5 pb-4">Uber</h5>
        <p className="pt-0 p-5">
          <a href="#/" className="text-decoration-none text-white">
            Visit Help Center
          </a>
        </p>
        <div className="row p-5">
          <div className="col-md-3 footer-list">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#/" className="text-decoration-none">
                  About us
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Our offerings
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Investors
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-list">
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#/" className="text-decoration-none">
                  Ride
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Drive
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Deliver
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Eat
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Uber for Business
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Uber Freight
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Gift cards
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-list">
            <h5>Global citizenship</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#/" className="text-decoration-none">
                  Safety
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Diversity and Inclusion
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Sustainability
                </a>
              </li>
            </ul>
            
          </div>
          <div className="col-md-3 footer-list">
          <h5>Travel</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#/" className="text-decoration-none">
                  Reserve
                </a>
              </li>
              <li>
                <a href="#/" className="text-decoration-none">
                  Cities
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <a href="#/" className="text-white mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#/" className="text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#/" className="text-white mx-2">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#/" className="text-white mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#/" className="text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
