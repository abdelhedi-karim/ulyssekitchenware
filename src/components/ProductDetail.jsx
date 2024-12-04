import React, { useState } from 'react';
import './bootstrap.min.css';
import './lightbox.css';
import './owl-carousel.css'
import './templatemo-hexashop.css'
import './font-awesome.css'
import './flex-slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
  // State for quantity and total price
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 75.0; // Example item price

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* Logo */}
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="Hexashop Logo" />
                </a>
                {/* Menu */}
                <ul className="nav">
                  <li><a href="index.html" className="active">Home</a></li>
                  <li><a href="index.html">Men's</a></li>
                  <li><a href="index.html">Women's</a></li>
                  <li><a href="index.html">Kid's</a></li>
                  <li className="submenu">
                    <a href="#">Pages</a>
                    <ul>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="products.html">Products</a></li>
                      <li><a href="single-product.html">Single Product</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">Features</a>
                    <ul>
                      <li><a href="#">Features Page 1</a></li>
                      <li><a href="#">Features Page 2</a></li>
                      <li><a href="#">Features Page 3</a></li>
                      <li><a href="https://templatemo.com/page/4" target="_blank" rel="nofollow">Template Page 4</a></li>
                    </ul>
                  </li>
                  <li><a href="index.html">Explore</a></li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Banner */}
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
  className="inner-content"
  style={{
    backgroundImage: `url('assets/images/products-page-heading.jpg')`,
   
  }}
>
                <h2>Single Product Page</h2>
                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="section" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <img src="assets/images/men-01.jpg" alt="Product 1" />
                
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4>New Green Jacket</h4>
                <span className="price">${pricePerItem.toFixed(2)}</span>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                </div>
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>No. of Orders</h6>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <button className="minus" onClick={decrementQuantity}>-</button>
                      <input
                        type="number"
                        step="1"
                        min="1"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(Number(e.target.value))}
                        title="Qty"
                        className="input-text qty text"
                      />
                      <button className="plus" onClick={incrementQuantity}>+</button>
                    </div>
                  </div>
                </div>
                <div className="total">
                  <h4>Total: ${(quantity * pricePerItem).toFixed(2)}</h4>
                  <div className="main-border-button"><a href="#">Add To Cart</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="first-item">
                <div className="logo">
                  <img src="assets/images/white-logo.png" alt="Hexashop Logo" />
                </div>
                <ul>
                  <li><a href="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a></li>
                  <li><a href="mailto:hexashop@company.com">hexashop@company.com</a></li>
                  <li><a href="tel:0100200340">010-020-0340</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Shopping &amp; Categories</h4>
              <ul>
                <li><a href="#">Men’s Shopping</a></li>
                <li><a href="#">Women’s Shopping</a></li>
                <li><a href="#">Kid's Shopping</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Homepage</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4>Help &amp; Information</h4>
              <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Tracking ID</a></li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="under-footer">
                <p>
                  Copyright &copy; 2022 HexaShop Co., Ltd. All Rights Reserved.
                  <br />
                  Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a>
                </p>
                <ul>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
