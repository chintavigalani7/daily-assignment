import React from "react";
import { Link } from "react-router-dom";
import image from "./images/carousel-1.jpg";
import image1 from "./images/carousel-2.jpg";
const Offer = () => {
  return (
    <div>
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "410px" }}>
            <img src={image} alt="" />
            {/* <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" /> */}
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  10% Off Your First Order
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  Fashionable Dress
                </h3>
                <Link to="/Product" className="btn btn-light py-2 px-3">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "410px" }}>
            <img src={image1} alt="" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  10% Off Your First Order
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  Reasonable Price
                </h3>
                <a href="/" className="btn btn-light py-2 px-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#header-carousel"
          data-slide="prev"
        >
          <div
            className="btn btn-dark"
            style={{ width: "45px", height: "45px" }}
          >
            <span className="carousel-control-prev-icon mb-n2"></span>
          </div>
        </a>
        <a
          className="carousel-control-next"
          href="#header-carousel"
          data-slide="next"
        >
          <div
            className="btn btn-dark"
            style={{ width: "45px", height: "45px" }}
          >
            <span className="carousel-control-next-icon mb-n2"></span>
          </div>
        </a>
      </div>
      <div class="container-fluid pt-5">
        <div class="row px-xl-5 pb-3">
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              class="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 class="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 class="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              class="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 class="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 class="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              class="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 class="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
              <h5 class="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              class="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              
              <h1 class="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 class="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
