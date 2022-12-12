import React from "react";
// import Snackbar from '@mui/material/Snackbar';
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <div>
        <main>Content</main>
      </div>
      <Footer />
    </Layout>
  );
}
