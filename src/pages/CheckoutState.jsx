import React from "react";
import celebration from "../assets/Celebration-amico.png"
import { Link, useParams } from "react-router-dom";
import Button from "../UI/Button";

import "../styles/checkoutstate.css";

const Success = () => {
  return (
    <div className="checkout">
      <div className="img_wrapper">
        <img
          src={celebration}
          alt=""
        />
        <img
          src="https://media.giphy.com/media/zJ5udfK9zBcyJDD7xz/giphy.gif"
          alt=""
        />
      </div>
      <h2>Thank you!</h2>
      <p>Your order has beed successfully processed</p>
      <Link to={"/"}>
        <Button text={"Back To Shopping"} />
      </Link>
    </div>
  );
};

const Cancel = () => {
  return (
    <div className="checkout">
        <img
        className="gif"
          src="https://media.giphy.com/media/0yXjVvEM2VWUX2CWpE/giphy.gif"
          alt=""
        />
      <h1>Order Canceled</h1>
       <Link to={"/"}>
        <Button text={"Back To Shopping"} />
      </Link>
    </div>
  );
};

const CheckoutState = () => {
  const param = useParams().id;
  return (
    <>
     {param === "success" && <Success />}
     {param === "cancel" && <Cancel />}
    </>
  );
};

export default CheckoutState;
