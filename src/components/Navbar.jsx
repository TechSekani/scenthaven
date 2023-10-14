import { useState, useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../App";

import '../styles/navbar.css'



const Navbar = ({isCartOpen, setIsCartOpen }) => {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartToggle = () =>{
    setIsMenuOpen(false)
    setIsCartOpen(prev => !prev)
  }
  
  const menuToggle = () =>{
    setIsCartOpen(false)
    setIsMenuOpen(prev => !prev)
  }

  return (
    <nav>
      <Link to="/" className="logo">
        ScentHaven
      </Link>
      <div className={`nav_links ${isMenuOpen ? "isOpen" : ''}`}>
        <NavLink to="/" onClick={menuToggle}>Home</NavLink>
        <NavLink to="products/men" onClick={menuToggle}>Men</NavLink>
        <NavLink to="products/women" onClick={menuToggle}>Women</NavLink>
        <NavLink to="about" onClick={menuToggle}>About Us</NavLink>
      </div>
          <div
            className="cart_icon"
            onClick={cartToggle}
          >
            <HiOutlineShoppingCart size={20} />
            <span>{cart.length}</span>
          </div>
      <CgMenuRight className="menu" size={25} onClick={() => setIsMenuOpen((prev) => !prev)} />
    </nav>
  );
};

export default Navbar;
