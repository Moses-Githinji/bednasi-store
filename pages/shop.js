import React, { useState } from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function Shop() {
  const [openCategories, setOpenCategories] = useState(false);
  const [showSubCategoryOne, setShowSubCategoryOne] = useState(false);
  const [showSubCategoryTwo, setShowSubCategoryTwo] = useState(false);
  const [showSubCategoryThree, setShowSubCategoryThree] = useState(false);
  const [showSubCategoryFour, setShowSubCategoryFour] = useState(false);
  const [showSubCategoryFive, setShowSubCategoryFive] = useState(false);
  const [showSubCategorySix, setShowSubCategorySix] = useState(false);
  const [showSubCategorySeven, setShowSubCategorySeven] = useState(false);
  const [showSubCategoryEight, setShowSubCategoryEight] = useState(false);

  const showCategories = () => {
    setOpenCategories(!openCategories);
  };

  const openSubCategoryOne = () => {
    setShowSubCategoryOne(!showSubCategoryOne);
  };

  const openSubCategoryTwo = () => {
    setShowSubCategoryTwo(!showSubCategoryTwo);
  };

  const openSubCategoryThree = () => {
    setShowSubCategoryThree(!showSubCategoryThree);
  };

  const openSubCategoryFour = () => {
    setShowSubCategoryFour(!showSubCategoryFour);
  };

  const openSubCategoryFive = () => {
    setShowSubCategoryFive(!showSubCategoryFive);
  };

  const openSubCategorySix = () => {
    setShowSubCategorySix(!showSubCategorySix);
  };

  const openSubCategorySeven = () => {
    setShowSubCategorySeven(!showSubCategorySeven);
  };

  const openSubCategoryEight = () => {
    setShowSubCategoryEight(!showSubCategoryEight);
  };

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
      <div className="filter-and-sort-btns-container">
        <div className="filter-icon-container">
          <button className="filter-btn" onClick={showCategories}>
            {!openCategories ? (
              <FilterAltIcon sx={{ fontSize: 15 }} />
            ) : (
              <ClearIcon sx={{ fontSize: 15 }} />
            )}
            Filter
          </button>
        </div>
        <div className="sort-btn-container">
          <button className="sort-btn">
            Sort
            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </button>
        </div>
      </div>
      {openCategories && (
        <div className="all-product-categories-container">
          <div className="container-title-close-btn-container">
            <div className="container-title">
              <p className="categories-title">Categories</p>
            </div>
          </div>
          <div className="individual-category-sub-category-container">
            <div className="individual-category-container">
              <p className="actual-category">Appliances(9)</p>
              <button
                className="open-sub-category"
                onClick={openSubCategoryOne}
              >
                {!showSubCategoryOne ? (
                  <AddIcon sx={{ fontSize: 15 }} className="sub-category-cta" />
                ) : (
                  <RemoveIcon
                    sx={{ fontSize: 15 }}
                    className="sub-category-cta"
                  />
                )}
              </button>
            </div>
            {showSubCategoryOne && (
              <div className="sub-category-container">
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Heating & Cooling(4)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Kitchen Appliances(6)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Vacuum & Cleaners(3)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Wahsers & Dryers(7)</p>
                </a>
              </div>
            )}
          </div>
          <div className="individual-category-sub-category-container">
            <div className="individual-category-container">
              <p className="actual-category">Baby & Kids(13)</p>
              <button
                className="open-sub-category"
                onClick={openSubCategoryTwo}
              >
                {!showSubCategoryTwo ? (
                  <AddIcon sx={{ fontSize: 15 }} className="sub-category-cta" />
                ) : (
                  <RemoveIcon
                    sx={{ fontSize: 15 }}
                    className="sub-category-cta"
                  />
                )}
              </button>
            </div>
            {showSubCategoryTwo && (
              <div className="sub-category-container">
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Backyard Play(12)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Kids Playroom(6)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Kids Storage(8)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Nursery Bedding(7)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Nursery Furniiture(9)</p>
                </a>
              </div>
            )}
          </div>
          <div className="individual-category-sub-category-container">
            <div className="individual-category-container">
              <p className="actual-category">Bed & Bath(4)</p>
              <button
                className="open-sub-category"
                onClick={openSubCategoryThree}
              >
                {!showSubCategoryThree ? (
                  <AddIcon sx={{ fontSize: 15 }} className="sub-category-cta" />
                ) : (
                  <RemoveIcon
                    sx={{ fontSize: 15 }}
                    className="sub-category-cta"
                  />
                )}
              </button>
            </div>
            {showSubCategoryThree && (
              <div className="sub-category-container">
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Bathroom Decor(5)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Bathroom Fixtures(6)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Bedding(8)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">
                    Shower Accessories(17)
                  </p>
                </a>
              </div>
            )}
          </div>
          <div className="individual-category-sub-category-container">
            <div className="individual-category-container">
              <p className="actual-category">Decor & Pillows(10)</p>
              <button
                className="open-sub-category"
                onClick={openSubCategoryFour}
              >
                {!showSubCategoryFour ? (
                  <AddIcon sx={{ fontSize: 15 }} className="sub-category-cta" />
                ) : (
                  <RemoveIcon
                    sx={{ fontSize: 15 }}
                    className="sub-category-cta"
                  />
                )}
              </button>
            </div>
            {showSubCategoryFour && (
              <div className="sub-category-container">
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Art(5)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Flowers & Plants(6)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Rugs(8)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Wall Decor(17)</p>
                </a>
              </div>
            )}
          </div>
          <div className="individual-category-sub-category-container">
            <div className="individual-category-container">
              <p className="actual-category">Furniture(32)</p>
              <button
                className="open-sub-category"
                onClick={openSubCategorySix}
              >
                {!showSubCategorySix ? (
                  <AddIcon sx={{ fontSize: 15 }} className="sub-category-cta" />
                ) : (
                  <RemoveIcon
                    sx={{ fontSize: 15 }}
                    className="sub-category-cta"
                  />
                )}
              </button>
            </div>
            {showSubCategorySix && (
              <div className="sub-category-container">
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Bathroom(5)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Bedroom(6)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Kitchen(8)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Livig Room(17)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Offices(17)</p>
                </a>
              </div>
            )}
          </div>
          <div className="individual-category-sub-category-container">
            <div className="individual-category-container">
              <a href="#" className="no-sub-categories">
                <p className="actual-category">Lighting(7)</p>
              </a>
            </div>
          </div>
          <div className="individual-category-sub-category-container">
            <div className="individual-category-container">
              <a href="#" className="no-sub-categories">
                <p className="actual-category">Organization(17)</p>
              </a>
            </div>
          </div>
          <div className="individual-category-sub-category-container">
            <div className="individual-category-container">
              <p className="actual-category">Outdoor(22)</p>
              <button
                className="open-sub-category"
                onClick={openSubCategorySeven}
              >
                {!showSubCategorySeven ? (
                  <AddIcon sx={{ fontSize: 15 }} className="sub-category-cta" />
                ) : (
                  <RemoveIcon
                    sx={{ fontSize: 15 }}
                    className="sub-category-cta"
                  />
                )}
              </button>
            </div>
            {showSubCategorySeven && (
              <div className="sub-category-container">
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Fencing & Flooring(5)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Garden(6)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Outdoor & Patio(8)</p>
                </a>
                <a href="#" className="each-product-page-link">
                  <p className="each-product-category">Outdoor Decor(5)</p>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </Layout>
  );
}

export default Shop;
