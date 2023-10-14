import Navbar from "../components/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Cart from "../UI/cart/Cart";
import { useState } from "react";


const RootLayout = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      <main id="wrapper">
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
