import React, { useState } from "react";
import router from "next/router";
// import Snackbar from '@mui/material/Snackbar';
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ClearIcon from "@mui/icons-material/Clear";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// import people from "../data";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Reviews from "../components/Reviews";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "white",
  // border: "1px solid #dddddd",
  // boxShadow: "10px 10px 5px 0px #e5e5e5",
  p: 4,
};

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Layout>
      <NavBar />
      <div className="home-container">
        <div className="furniture-container">
          <span className="furniture-span">Furniture</span>
          <img
            src="/furniture.jpg"
            className="select-image"
            alt="alternative"
          />
        </div>
        <div className="furniture-container">
          <span className="bedroom-span">Bedroom</span>
          <img src="/bedroom.jpg" className="select-image" alt="alternative" />
        </div>
        <div className="furniture-container">
          <span className="kitchen-span">Kitchen</span>
          <img src="/kitchen.jpg" className="select-image" alt="alternative" />
        </div>
        <div className="furniture-container">
          <span className="offices-span">Office</span>
          <img src="/office.jpg" className="select-image" alt="alternative" />
        </div>
      </div>
      <div className="brief-desc-container">
        <div className="tag-desc-container">
          <BookmarksOutlinedIcon sx={{ fontSize: 60 }} />
          <div className="desc-container">
            <p className="part-one">Amazing Value Every Day</p>
            <p className="part-two">Items prices that fit your budget.</p>
          </div>
        </div>
        <div className="tag-desc-container">
          <LocalShippingOutlinedIcon sx={{ fontSize: 60 }} />
          <div className="desc-container">
            <p className="part-one">Free Shipping Over Ksh.5500</p>
            <p className="part-two">Popular delivery on 1 - 2 days</p>
          </div>
        </div>
        <div className="tag-desc-container">
          <MilitaryTechOutlinedIcon sx={{ fontSize: 60 }} />
          <div className="desc-container">
            <p className="part-one">Expert Customer Service</p>
            <p className="part-two">Our team on seven days a week.</p>
          </div>
        </div>
        <div className="tag-desc-container">
          <ThumbUpAltOutlinedIcon sx={{ fontSize: 60 }} />
          <div className="desc-container">
            <p className="part-one">Unbeatable Selection</p>
            <p className="part-two">All things home, all in one place.</p>
          </div>
        </div>
      </div>
      <div className="daily-flash-sale-container">
        <p className="daily-flash-sale-desc">Daily Flash Sale!</p>
      </div>
      <div className="daily-flash-sales-products-container">
        <div className="individual-sale-daily">
          <button className="modal-opener" onClick={openModalHandler}>
            Quick View
          </button>
          <img
            src="/plastic-chair.jpg"
            alt="plastic-chair"
            className="plastic-chair"
          />
          <div className="product-desc-container">
            <a href="#" className="link-style flash-sale">
              Affordable Plastic Chair
            </a>
            <div className="price-desc-container">
              <p className="previous-price">Ksh.5500</p>
              <p className="current-price">Ksh.3500</p>
            </div>
            <div className="cta-btn-container">
              <button className="read-more">Read More</button>
              <button className="read-more">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="individual-sale-daily">
          <button className="modal-opener" onClick={openModalHandler}>
            Quick View
          </button>
          <img
            src="/dining-table.jpg"
            alt="plastic-chair"
            className="plastic-chair"
          />
          <div className="product-desc-container">
            <a href="#" className="link-style flash-sale">
              Mini Dining Set
            </a>
            <div className="price-desc-container">
              <p className="previous-price">Ksh.30,00</p>
              <p className="current-price">Ksh.20,00</p>
            </div>
            <div className="cta-btn-container">
              <button className="read-more">Read More</button>
              <button className="read-more">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="individual-sale-daily">
          <button className="modal-opener" onClick={openModalHandler}>
            Quick View
          </button>
          <img src="/bed.jpg" alt="plastic-chair" className="plastic-chair" />
          <div className="product-desc-container">
            <a href="#" className="link-style flash-sale">
              King size bed
            </a>
            <div className="price-desc-container">
              <p className="previous-price">Ksh.55,500</p>
              <p className="current-price">Ksh.41,500</p>
            </div>
            <div className="cta-btn-container">
              <button className="read-more">Read More</button>
              <button className="read-more">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="individual-sale-daily">
          <button className="modal-opener" onClick={openModalHandler}>
            Quick View
          </button>
          <img src="/sofa.jpg" alt="plastic-chair" className="plastic-chair" />
          <div className="product-desc-container">
            <a href="#" className="link-style flash-sale">
              Affordable Sofa
            </a>
            <div className="price-desc-container">
              <p className="previous-price">Ksh.53,500</p>
              <p className="current-price">Ksh.39,500</p>
            </div>
            <div className="cta-btn-container">
              <button className="read-more">Read More</button>
              <button className="read-more">Add To Cart</button>
            </div>
          </div>
        </div>
        {/* Modal to open a product desc fast */}
        {openModal && (
          // <div className="quick-product-desc-container">
          //   <button onClick={closeModalHandler} className="clear-btn-icon">
          //     <ClearIcon
          //       className="search clear-icon login sidebar"
          //       sx={{
          //         fontSize: 25,
          //         cursor: "pointer",
          //       }}
          //     />
          //   </button>
          // </div>
          <Modal
            open={openModalHandler}
            onClose={closeModalHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <button
                onClick={closeModalHandler}
                className="clear-btn-icon modal-only"
              >
                <ClearIcon
                  className="search clear-icon "
                  sx={{
                    fontSize: 25,
                    cursor: "pointer",
                  }}
                />
              </button>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        )}
      </div>
      <div className="product-category-images-container">
        <div className="first-column-container">
          <div className="rugs-container">
            <span className="rugs-desc-one">Mini Rugs</span>
            <span className="rugs-desc-two">From Ksh.300</span>
            <img src="/rug.jpg" alt="rug" />
          </div>
          <div className="lamp-shade-container">
            <span className="lamp-desc-one">Sale 50% off</span>
            <span className="lamp-shade-two">Table Lamp</span>
            <img src="/lamp-shade.jpg" alt="lamp shade" />
          </div>
        </div>
        <div className="second-column-container">
          <span className="big-desc-one">Top Rated Sideboards</span>
          <span className="big-shade-two">Under Ksh.15,000</span>
          <button className="big-image-btn" onClick={handleClick}>
            <ArrowCircleRightIcon
              sx={{ fontSize: 35, cursor: "pointer" }}
              className="cta-bg-image"
            />
          </button>
        </div>
        <div className="first-column-container">
          <div className="rugs-container">
            <span className="rugs-desc-one">Appliances</span>
            <span className="rugs-desc-two">For your Kitchen</span>
            <img src="/kitchen-appliance.jpg" alt="rug" />
          </div>
          <div className="lamp-shade-container">
            <span className="lamp-desc-one">Office Chairs</span>
            <span className="lamp-shade-two">New Style</span>
            <img src="/leather-chair.jpg" alt="lamp shade" />
          </div>
        </div>
      </div>
      <div className="shop-by-department-container">
        <p className="shop-by-department">Shop By Department</p>
      </div>
      <div className="all-products-container">
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/orange-chair.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Furniture</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/outdoor.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Outdoor</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/bed-category.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Bed & Bath</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/decor.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Decor & Pillows</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/rug-category.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Rugs</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/lighting.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Lighting</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/renovation.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Renovation</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/kitchen-hood.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Appliances</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/toaster.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Kitchen</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/baby-table.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Baby & Kids</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/office-cabinets.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Offices</p>
          </div>
        </div>
        <div className="individual-product-container">
          <div className="a-product-image">
            <img src="/basket.jpg" alt="orange chair" />
          </div>
          <div className="product-desc-container">
            <p>Organisation</p>
          </div>
        </div>
      </div>
      <div className="shop-by-department-container select-by-category-container">
        <p className="shop-by-department select-by-category">
          Popular Picks in BedNasi
        </p>
      </div>
      <Tabs>
        <TabList className="tab-nav-container">
          <Tab className="tab-nav-link">Furniture</Tab>
          <Tab className="tab-nav-link">Outdoor</Tab>
          <Tab className="tab-nav-link">Decor & Pillows</Tab>
          <Tab className="tab-nav-link">Appliances</Tab>
          <Tab className="tab-nav-link">Bed & Bath</Tab>
          <Tab className="tab-nav-link">Baby & Kids</Tab>
        </TabList>

        <TabPanel>
          <div className="daily-flash-sales-products-container products-by-category-tabs-container">
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/plastic-chair.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Plastic Chair
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.5500</p>
                  <p className="current-price">Ksh.3500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/dining-table.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Mini Dining Set
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.30,00</p>
                  <p className="current-price">Ksh.20,00</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/bed.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  King size bed
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.55,500</p>
                  <p className="current-price">Ksh.41,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/sofa.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Sofa
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.53,500</p>
                  <p className="current-price">Ksh.39,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            {/* Modal to open a product desc fast */}
            {openModal && (
              // <div className="quick-product-desc-container">
              //   <button onClick={closeModalHandler} className="clear-btn-icon">
              //     <ClearIcon
              //       className="search clear-icon login sidebar"
              //       sx={{
              //         fontSize: 25,
              //         cursor: "pointer",
              //       }}
              //     />
              //   </button>
              // </div>
              <Modal
                open={openModalHandler}
                onClose={closeModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <button
                    onClick={closeModalHandler}
                    className="clear-btn-icon modal-only"
                  >
                    <ClearIcon
                      className="search clear-icon "
                      sx={{
                        fontSize: 25,
                        cursor: "pointer",
                      }}
                    />
                  </button>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="daily-flash-sales-products-container products-by-category-tabs-container">
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/plastic-chair.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Plastic Chair
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.5500</p>
                  <p className="current-price">Ksh.3500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/dining-table.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Mini Dining Set
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.30,00</p>
                  <p className="current-price">Ksh.20,00</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/bed.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  King size bed
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.55,500</p>
                  <p className="current-price">Ksh.41,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/sofa.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Sofa
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.53,500</p>
                  <p className="current-price">Ksh.39,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/bed-category.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Sofa
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.53,500</p>
                  <p className="current-price">Ksh.39,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/decor.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Sofa
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.53,500</p>
                  <p className="current-price">Ksh.39,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/toaster.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Sofa
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.53,500</p>
                  <p className="current-price">Ksh.39,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            {/* Modal to open a product desc fast */}
            {openModal && (
              // <div className="quick-product-desc-container">
              //   <button onClick={closeModalHandler} className="clear-btn-icon">
              //     <ClearIcon
              //       className="search clear-icon login sidebar"
              //       sx={{
              //         fontSize: 25,
              //         cursor: "pointer",
              //       }}
              //     />
              //   </button>
              // </div>
              <Modal
                open={openModalHandler}
                onClose={closeModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <button
                    onClick={closeModalHandler}
                    className="clear-btn-icon modal-only"
                  >
                    <ClearIcon
                      className="search clear-icon "
                      sx={{
                        fontSize: 25,
                        cursor: "pointer",
                      }}
                    />
                  </button>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="daily-flash-sales-products-container products-by-category-tabs-container">
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/plastic-chair.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Plastic Chair
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.5500</p>
                  <p className="current-price">Ksh.3500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/dining-table.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Mini Dining Set
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.30,00</p>
                  <p className="current-price">Ksh.20,00</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/bed.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  King size bed
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.55,500</p>
                  <p className="current-price">Ksh.41,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/sofa.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Sofa
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.53,500</p>
                  <p className="current-price">Ksh.39,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            {/* Modal to open a product desc fast */}
            {openModal && (
              // <div className="quick-product-desc-container">
              //   <button onClick={closeModalHandler} className="clear-btn-icon">
              //     <ClearIcon
              //       className="search clear-icon login sidebar"
              //       sx={{
              //         fontSize: 25,
              //         cursor: "pointer",
              //       }}
              //     />
              //   </button>
              // </div>
              <Modal
                open={openModalHandler}
                onClose={closeModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <button
                    onClick={closeModalHandler}
                    className="clear-btn-icon modal-only"
                  >
                    <ClearIcon
                      className="search clear-icon "
                      sx={{
                        fontSize: 25,
                        cursor: "pointer",
                      }}
                    />
                  </button>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="daily-flash-sales-products-container products-by-category-tabs-container">
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/plastic-chair.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Plastic Chair
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.5500</p>
                  <p className="current-price">Ksh.3500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/dining-table.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Mini Dining Set
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.30,00</p>
                  <p className="current-price">Ksh.20,00</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/bed.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  King size bed
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.55,500</p>
                  <p className="current-price">Ksh.41,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/sofa.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Sofa
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.53,500</p>
                  <p className="current-price">Ksh.39,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            {/* Modal to open a product desc fast */}
            {openModal && (
              // <div className="quick-product-desc-container">
              //   <button onClick={closeModalHandler} className="clear-btn-icon">
              //     <ClearIcon
              //       className="search clear-icon login sidebar"
              //       sx={{
              //         fontSize: 25,
              //         cursor: "pointer",
              //       }}
              //     />
              //   </button>
              // </div>
              <Modal
                open={openModalHandler}
                onClose={closeModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <button
                    onClick={closeModalHandler}
                    className="clear-btn-icon modal-only"
                  >
                    <ClearIcon
                      className="search clear-icon "
                      sx={{
                        fontSize: 25,
                        cursor: "pointer",
                      }}
                    />
                  </button>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="daily-flash-sales-products-container products-by-category-tabs-container">
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/plastic-chair.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Plastic Chair
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.5500</p>
                  <p className="current-price">Ksh.3500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/dining-table.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Mini Dining Set
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.30,00</p>
                  <p className="current-price">Ksh.20,00</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/bed.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  King size bed
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.55,500</p>
                  <p className="current-price">Ksh.41,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/sofa.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Sofa
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.53,500</p>
                  <p className="current-price">Ksh.39,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            {/* Modal to open a product desc fast */}
            {openModal && (
              // <div className="quick-product-desc-container">
              //   <button onClick={closeModalHandler} className="clear-btn-icon">
              //     <ClearIcon
              //       className="search clear-icon login sidebar"
              //       sx={{
              //         fontSize: 25,
              //         cursor: "pointer",
              //       }}
              //     />
              //   </button>
              // </div>
              <Modal
                open={openModalHandler}
                onClose={closeModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <button
                    onClick={closeModalHandler}
                    className="clear-btn-icon modal-only"
                  >
                    <ClearIcon
                      className="search clear-icon "
                      sx={{
                        fontSize: 25,
                        cursor: "pointer",
                      }}
                    />
                  </button>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="daily-flash-sales-products-container products-by-category-tabs-container">
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/plastic-chair.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Plastic Chair
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.5500</p>
                  <p className="current-price">Ksh.3500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/dining-table.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Mini Dining Set
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.30,00</p>
                  <p className="current-price">Ksh.20,00</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/bed.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  King size bed
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.55,500</p>
                  <p className="current-price">Ksh.41,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="individual-sale-daily">
              <button className="modal-opener" onClick={openModalHandler}>
                Quick View
              </button>
              <img
                src="/sofa.jpg"
                alt="plastic-chair"
                className="plastic-chair"
              />
              <div className="product-desc-container">
                <a href="#" className="link-style flash-sale">
                  Affordable Sofa
                </a>
                <div className="price-desc-container">
                  <p className="previous-price">Ksh.53,500</p>
                  <p className="current-price">Ksh.39,500</p>
                </div>
                <div className="cta-btn-container">
                  <button className="read-more">Read More</button>
                  <button className="read-more">Add To Cart</button>
                </div>
              </div>
            </div>
            {/* Modal to open a product desc fast */}
            {openModal && (
              // <div className="quick-product-desc-container">
              //   <button onClick={closeModalHandler} className="clear-btn-icon">
              //     <ClearIcon
              //       className="search clear-icon login sidebar"
              //       sx={{
              //         fontSize: 25,
              //         cursor: "pointer",
              //       }}
              //     />
              //   </button>
              // </div>
              <Modal
                open={openModalHandler}
                onClose={closeModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <button
                    onClick={closeModalHandler}
                    className="clear-btn-icon modal-only"
                  >
                    <ClearIcon
                      className="search clear-icon "
                      sx={{
                        fontSize: 25,
                        cursor: "pointer",
                      }}
                    />
                  </button>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            )}
          </div>
        </TabPanel>
      </Tabs>
      <div className="shop-by-department-container select-by-category-container">
        <p className="shop-by-department select-by-category">
          Most Popular Blog Posts
        </p>
      </div>
      <div className="popular-blogs-container">
        <div className="individual-blog-post-container">
          <div className="blog-post-image-container">
            <img src="/furniture.jpg" alt="baby-table" className="blog-image" />
          </div>
          <p className="blog-post-category">Baby & Kids</p>
          <p className="blog-post-title">
            Five best baby tables for this Black Friday!!
          </p>
          <div className="author-date-views-container">
            <span className="author">
              By <p className="author-name">John Smilga</p>
            </span>
            <p className="publishing-date">21st January 2022</p>
          </div>
        </div>
        <div className="individual-blog-post-container">
          <div className="blog-post-image-container">
            <img src="/bedroom.jpg" alt="baby-table" className="blog-image" />
          </div>
          <p className="blog-post-category">Bedroom</p>
          <p className="blog-post-title">
            Give your bedroom a new look this valentines
          </p>
          <div className="author-date-views-container">
            <span className="author">
              By <p className="author-name">Kate Waithira</p>
            </span>
            <p className="publishing-date">14th February 2022</p>
          </div>
        </div>
        <div className="individual-blog-post-container">
          <div className="blog-post-image-container">
            <img src="/kitchen.jpg" alt="baby-table" className="blog-image" />
          </div>
          <p className="blog-post-category">Kitchen</p>
          <p className="blog-post-title">
            Make your kitchen into a beautiful space you love.
          </p>
          <div className="author-date-views-container">
            <span className="author">
              By <p className="author-name">Devin Makau</p>
            </span>
            <p className="publishing-date">12th June 2022</p>
          </div>
        </div>
      </div>
      <div className="newsletter-container">
        <div className="text-descriptions-container">
          <p className="bigger-text">Join our newsletter and get...</p>
          <p className="smaller-text">
            Join our email subscription now to get updates on promotions and
            coupons.
          </p>
        </div>
        <div className="email-input-social-btns-container">
          <div className="email-input-submit-btn-container">
            <input
              type="email"
              name="email"
              className="email"
              id="email"
              placeholder="Your email here..."
            />
            <SendIcon className="send-email" />
          </div>
          <div className="socials-container">
            <button className="facebook-icon">
              <FacebookRoundedIcon sx={{ fontSize: 30 }} />
            </button>
            <button className="twitter-icon">
              <TwitterIcon sx={{ fontSize: 30 }} />
            </button>
            <button className="instagram-icon">
              <InstagramIcon sx={{ fontSize: 30 }} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
