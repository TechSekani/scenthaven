import { useContext } from "react";
import getStripe from "../../../lib/getStripe";
import { CartContext } from "../../App";
import Button from "../Button";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const { cart } = useContext(CartContext);

  const checkout = async () => {
    if(cart.length == 0){
      alert("Your cart is empty")
      return
    }
    let lineItem = [];
    cart.forEach(item => {
      lineItem.push({
        price: item.priceId,
        quantity: item.quantity
      },)
    });
   const stripe = await getStripe();
   const { error } = await stripe.redirectToCheckout({
    lineItems: lineItem,
    mode: 'payment',
    successUrl: `${import.meta.env.VITE_CHECKOUT_URL}success`,
    cancelUrl: `${import.meta.env.VITE_CHECKOUT_URL}cancel`,
  });
  console.warn(error.message);
  };

  return (
    <div className={`cart ${isCartOpen ? "isOpen" : ""}`}>
      <h2>Your Cart</h2>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            img={item.img}
            quantity={item.quantity}
          />
        );
      })}
      <div className="cart_footer">
        <p>Shipping calculated at Checkout</p>
        <p>
          Total:{" "}
          <span>
            ₦
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </p>
        {/* <Link to={cart.length > 0 ? "checkout" : "/"}> */}
          <Button
            text={"CHECKOUT"}
            onClick={checkout}
          />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Cart;
