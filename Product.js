import React from "react";
import image1 from "./images/product-1.jpg";
import image2 from "./images/product-2.jpg";
import image3 from "./images/product-3.jpg";
import image4 from "./images/product-4.jpg";
import image5 from "./images/product-5.jpg";
import image6 from "./images/product-6.jpg";
import image7 from "./images/product-7.jpg";
import image8 from "./images/product-8.jpg";

const Product = () => {
  return (
    <div>
      <div class="container-fluid pt-5">
        <div class="text-center mb-4">
          <h2 class="section-title px-5">
            <span class="px-2">Trandy Products</span>
          </h2>
        </div>
        <div class="row px-xl-5 pb-3">
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img src={image1} style={{height:'300px'}} alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img src={image2} style={{height:'300px'}} alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img src={image3} style={{height:'300px'}} alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img src={image4} style={{height:'300px'}} alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img src={image5} style={{height:'300px'}} alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img src={image6} style={{height:'300px'}} alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img src={image7} style={{height:'300px'}} alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img src={image8} style={{height:'300px'}} alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
