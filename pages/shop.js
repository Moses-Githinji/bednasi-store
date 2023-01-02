import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function shop() {
  return (
    <Layout title="Products">
      <NavBar />
      <div className="overall-shop-page-container">
        <div className="breadcrumb-page-title-products-category-container">
          <div className="breadcrumb-container">
            <Breadcrumbs aria-label="breadcrumb" separator="›">
              <Link href="#" className="breadcrumb-link">
                Home
              </Link>
              <p className="exact-page-on-navigation">Shop</p>
            </Breadcrumbs>
          </div>
          <div className="shop-page-header">
            <p className="large-text">Shop</p>
          </div>
          <div className="product-categories-container-shop">
            <div className="individual-product-category">
              <div className="product-image-container">
                <img src="/kitchen-hood.jpg" alt="kitchen hood" />
              </div>
              <div className="product-category-name-product-count-container">
                <p className="product-category-name">Appliances</p>
                <p className="product-count">9 Products</p>
              </div>
            </div>
            <div className="individual-product-category">
              <div className="product-image-container">
                <img src="/baby-table.jpg" alt="kitchen hood" />
              </div>
              <div className="product-category-name-product-count-container">
                <p className="product-category-name">Baby & Kids</p>
                <p className="product-count">14 Products</p>
              </div>
            </div>
            <div className="individual-product-category">
              <div className="product-image-container">
                <img src="/bed-category.jpg" alt="kitchen hood" />
              </div>
              <div className="product-category-name-product-count-container">
                <p className="product-category-name">Bed & Bath</p>
                <p className="product-count">5 Products</p>
              </div>
            </div>
            <div className="individual-product-category">
              <div className="product-image-container">
                <img src="/decor.jpg" alt="kitchen hood" />
              </div>
              <div className="product-category-name-product-count-container">
                <p className="product-category-name">Decor & Pillows</p>
                <p className="product-count">15 Products</p>
              </div>
            </div>
            <div className="individual-product-category">
              <div className="product-image-container">
                <img src="/orange-chair.jpg" alt="kitchen hood" />
              </div>
              <div className="product-category-name-product-count-container">
                <p className="product-category-name">Furniture</p>
                <p className="product-count">20 Products</p>
              </div>
            </div>
            <div className="individual-product-category">
              <div className="product-image-container">
                <img src="/lighting.jpg" alt="kitchen hood" />
              </div>
              <div className="product-category-name-product-count-container">
                <p className="product-category-name">Lighting</p>
                <p className="product-count">12 Products</p>
              </div>
            </div>
            <div className="individual-product-category">
              <div className="product-image-container">
                <img src="/basket.jpg" alt="kitchen hood" />
              </div>
              <div className="product-category-name-product-count-container">
                <p className="product-category-name">Organization</p>
                <p className="product-count">17 Products</p>
              </div>
            </div>
            <div className="individual-product-category">
              <div className="product-image-container">
                <img src="/outdoor.jpg" alt="kitchen hood" />
              </div>
              <div className="product-category-name-product-count-container">
                <p className="product-category-name">Outdoor</p>
                <p className="product-count">10 Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default shop;
