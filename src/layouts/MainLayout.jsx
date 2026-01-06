import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Social from "../components/Social";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </main>
      <Social></Social>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
