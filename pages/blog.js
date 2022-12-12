import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function blog() {
  return (
    <Layout title="Our Blog">
      <NavBar />
      <div>blog</div>
      <Footer />
    </Layout>
  );
}

export default blog;
