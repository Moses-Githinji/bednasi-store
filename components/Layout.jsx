import React from "react";
import Head from "next/head";
// import NavBar from "../components/NavBar";

// import Footer from "../components/Footer";

function Layout({ title, children, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - BedNasi Store` : "BedNasi Store"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      {/* <NavBar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
