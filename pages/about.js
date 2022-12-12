import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function about() {
  return (
    <Layout title="About Us">
      <NavBar />
      <div>about</div>
      <Footer />
    </Layout>
  );
}

export default about;
