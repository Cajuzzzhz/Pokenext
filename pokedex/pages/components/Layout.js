import Navbar from "./Navbar";
import Footer from "./Footer";

import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
