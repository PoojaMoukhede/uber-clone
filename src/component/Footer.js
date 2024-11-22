import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        {/* Header */}
        <div className="mb-4 ">
          <h5 className="fw-bold p-5">Uber</h5>
          <p className="p-5 pt-0">
            <a href="#/" className="text-decoration-none text-white">
              Visit Help Center
            </a>
          </p>
        </div>

        {/* Footer Links */}
        <div className="row mb-4 p-5">
          {/* Column 1: Company */}
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
                <a href="#/" className=" text-decoration-none">
                  Ride
                </a>
              </li>
              <li>
                <a href="#/" className=" text-decoration-none">
                  Drive
                </a>
              </li>
              <li>
                <a href="#/" className=" text-decoration-none">
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

          {/* Column 3: Global Citizenship */}
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

          {/* Column 4: Travel */}
          <div className="col-md-3 footer-list">
            <h5>Travel</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#/" className=" text-decoration-none">
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

        {/* Social Media and Store Links */}
        <div className="d-flex justify-content-between align-items-center  p-5 pt-0">
          {/* Social Media */}
          <div className="d-flex gap-5 align-items-center">
            <button className="btn btn_black  text-white">
              <i className="fab fa-facebook p-2"></i>
            </button>
            <button className="btn btn_black mx-2 text-white">
              <i className="fab fa-twitter  p-2"></i>
            </button>
            <button className="btn btn_black mx-2 text-white">
              <i className="fab fa-youtube  p-2"></i>
            </button>
            <button className="btn btn_black mx-2 text-white">
              <i className="fab fa-linkedin  p-2"></i>
            </button>
            <button className="btn btn_black mx-2 text-white">
              <i className="fab fa-instagram  p-2"></i>
            </button>
          </div>

          {/* Store Links */}
          <div className="d-flex gap-3 align-items-center " style={{paddingRight:'60px'}}>
            <span className="d-flex align-items-center">
              <i class="fa-solid fa-globe mx-2"></i>
              <p className="mb-0">English</p>
            </span>

            <span className="d-flex align-items-center">
              <i class="fa-solid fa-location-dot mx-2"></i>
              <p className="mb-0">Bhopal</p>
            </span>
          </div>
        </div>
        <div className="p-5 pt-0 pb-2">
          <img
            src="/imgs/play_store.png"
            alt="Google Play"
            className="img-fluid me-2 border rounded border-secondary"
            style={{ width: "120px" }}
          />
          <img
            src="/imgs/app_store.png"
            alt="App Store"
            className="img-fluid border rounded border-secondary"
            style={{ width: "120px" }}
          />
        </div>
        {/* Footer Bottom */}
        <div className="d-flex justify-content-between align-items-center  p-5 pb-2">
          <p className="mb-1 text-secondary" style={{fontSize:'12px'}}>&copy; 2024 Uber Technologies Inc.</p>
          <p style={{fontSize:'12px'}}>
            <a href="#/" className="text-secondary text-decoration-none mx-2">
              Privacy
            </a>
            <a href="#/" className="text-secondary text-decoration-none mx-2">
              Accessibility
            </a>
            <a href="#/" className="text-secondary text-decoration-none mx-2">
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
