import React, { useState,useEffect } from "react";

const Main = () => {
  const [view, setView] = useState("ride");
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 800);
  }, []);

  return (
    <main className="container mt-5" style={{ width: "80vw" }}>
      <div className="row p-3">
        <div className="col-6">
          <h1 className="fw-bold pb-4" style={{ fontSize: "52px" }}>
            {view === "ride" ? "Go anywhere with Uber" : "Deliver a package"}
          </h1>
          <div className="row">
            <div className="col-3">
              <button
                className={`btn ${
                  view === "ride" ? "text-black" : "text-secondary"
                }`}
                onClick={() => setView("ride")}
              >
                <i className="fa-solid fa-car" style={{ fontSize: "18px" }}></i>
                <br />
                Ride
              </button>
            </div>
            <div className="col-3">
              <button
                className={`btn ${
                  view === "package" ? "text-black" : "text-secondary"
                }`}
                onClick={() => setView("package")}
              >
                <i
                  className="fa-solid fa-box-open"
                  style={{ fontSize: "18px" }}
                ></i>
                <br />
                Package
              </button>
            </div>
          </div>

          {/* Dynamic Form */}
          <div className="d-flex justify-content-center mt-4">
            <div className="" style={{ width: "100%" }}>
              <form className="d-flex flex-column gap-2">
                {/* Pickup Input */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control p-3 border-0"
                    id="pickup"
                    placeholder="Pickup location"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control p-3 border-0"
                    id="dropoff"
                    placeholder="Dropoff location"
                  />
                </div>

                {view === "ride" && (
                  <div className="row">
                    <div className="col-5">
                      <input
                        type="date"
                        placeholder="Today"
                        className="form-control border-0 p-3"
                        id="date"
                      />
                    </div>
                    <div className="col-5">
                      <input
                        type="time"
                        placeholder="Now"
                        className="form-control border-0 p-3"
                        id="time"
                      />
                    </div>
                    <div className="col-2"></div>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    className="btn btn-block mt-5 ms-2"
                    style={{
                      height: "50px",
                      backgroundColor: "black",
                      color: "white",
                      width: "8rem",
                    }}
                  >
                    See prices
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="mapouter">
            <div className="gmap_canvas">
           
              <iframe
                className={`gmap_iframe slide-in ${isVisible ? "active" : ""}`}
                width="100%"
                title="Google Maps showing Bhopal"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=bhopal&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-5 pb-5">
        <div className="grid p-3">
          <h3 className="fw-bold">Suggestions</h3>
          <ul className="d-flex pt-4 pb-4">
            <li className="css-dcPJSH">
              <a className="css-iwCxLf" href="https://m.uber.com/looking/">
                <div>
                  <div className="fw-bold text-black">Ride</div>
                  <p className="css-iovQQQ">
                    Go anywhere with Uber. Request a ride, hop in, and go.
                  </p>
                  <button
                    target="_self"
                    className="btn btn-light btn-sm fw-bold"
                  >
                    Details
                  </button>
                </div>
                <img
                  alt="Ride"
                  className="css-kLZafC"
                  src="https://mobile-content.uber.com/launch-experience/ride.png"
                />
              </a>
            </li>
            <li className="css-dcPJSH">
              <a
                className="css-iwCxLf"
                href="https://m.uber.com/go/connect/pickup"
              >
                <div>
                  <div className="fw-bold text-black">Package</div>
                  <p className="css-iovQQQ">
                    Uber Connect makes same-day delivery easier than ever.
                  </p>
                  <button
                    target="_self"
                    className="btn btn-light btn-sm fw-bold"
                  >
                    Details
                  </button>
                </div>
                <img
                  alt="Package"
                  className="css-kLZafC"
                  src="https://mobile-content.uber.com/launch-experience/connect.png"
                />
              </a>
            </li>
            <li className="css-dcPJSH">
              <a className="css-iwCxLf" href="https://m.uber.com/reserve/">
                <div>
                  <div className="fw-bold text-black">Reserve</div>
                  <p className="css-iovQQQ">
                    Reserve your ride in advance so you can relax on the day of
                    your trip.
                  </p>
                  <button
                    target="_self"
                    className="btn btn-light btn-sm fw-bold"
                  >
                    Details
                  </button>
                </div>
                <img
                  alt="Reserve"
                  className="css-kLZafC"
                  src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row align-items-center" style={{ paddingBottom: "5rem" }}>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="/imgs/first.png"
            alt="Feature Imge"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 text-md-start text-center p-5">
          <h1 className="featurette-heading lh-1 mb-4 p-5 pb-3">
            Drive when you want, make what you need
          </h1>
          <p className="lead  mb-4 px-5 pb-3">
            Make money on your schedule with deliveries or rides—or both. You
            can use your own car or choose a rental through Uber.
          </p>
          <div className="d-flex justify-content-md-start justify-content-center px-5">
            <button
              className="btn me-3"
              style={{
                height: "50px",
                backgroundColor: "black",
                color: "white",
                width: "8rem",
              }}
            >
              Get started
            </button>
            <a href="#/" className="text-dark align-self-center custom-link">
              Already have an account? Sign in
            </a>
          </div>
        </div>
      </div>

      <div className="row align-items-center" style={{ paddingBottom: "5rem" }}>
        <div className="col-md-6 text-md-start text-center p-5">
          <h1 className="featurette-heading lh-1 mb-4 p-5 pb-3">
            The Uber you know, reimagined for business
          </h1>
          <p className="lead  mb-4 px-5 pb-3">
            Uber for Business is a platform for managing global rides and meals,
            and local deliveries, for companies of any size.
          </p>
          <div className="d-flex justify-content-md-start justify-content-center px-5">
            <button
              className="btn me-3"
              style={{
                height: "50px",
                backgroundColor: "black",
                color: "white",
                width: "8rem",
              }}
            >
              Get started
            </button>
            <a href="#/" className="text-dark align-self-center custom-link">
              Check out our solutions
            </a>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="/imgs/second.png"
            alt="Feature Imge"
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div className="row align-items-center" style={{ paddingBottom: "5rem" }}>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="/imgs/third.png"
            alt="Feature Imge"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 text-md-start text-center p-5">
          <h1 className="featurette-heading lh-1 mb-4 p-5 pb-3">
            Make money by renting out your car
          </h1>
          <p className="lead  mb-4 px-5 pb-3">
            Connect with thousands of drivers and earn more per week with Uber’s
            free fleet management tools.
          </p>
          <div className="d-flex justify-content-md-start justify-content-center px-5">
            <button
              className="btn me-3"
              style={{
                height: "50px",
                backgroundColor: "black",
                color: "white",
                width: "8rem",
              }}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="row py-5">
        <h2 className="mb-4 " style={{ fontSize: "36px", color: "black" }}>
          It's easier in the apps
        </h2>
        <div className="row justify-content-between">
          <div
            className="col-md-6 mb-4 hover-effect"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex  align-items-center gap-5">
              <img
                src="/imgs/qr1.png"
                alt="Download Driver App"
                className="img-fluid mb-3"
                width="150"
              />
              <p className="mb-0">
                {" "}
                <h5 className="p-0 m-0 fw-bold">Download the Driver app</h5>
                <p className="mb-0">Scan to download</p>
              </p>
              <i className="fas fa-arrow-right arrow-icon"></i>
            </div>
          </div>
          <div
            className="col-md-6 mb-4 hover-effect"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex  align-items-center gap-5">
              <img
                src="/imgs/qr2.webp"
                alt="Download Driver App"
                className="img-fluid mb-3"
                width="150"
              />
              <p className="mb-0">
                {" "}
                <h5 className="p-0 m-0 fw-bold">Download the Driver app</h5>
                <p className="mb-0">Scan to download</p>
              </p>
              <i className="fas fa-arrow-right arrow-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
