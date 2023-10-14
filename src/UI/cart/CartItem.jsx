import { useState, useContext, useEffect } from "react";
import { RiDeleteBinLine } from 'react-icons/ri'
import { CartContext } from "../../App";
import Quantity from "../Quantiity";

const CartItem = ({id, title, price, quantity, img}) => {
    const { removeFromCart, handleQuantity } = useContext(CartContext);
    const [count, setCount] = useState(quantity)

    useEffect(() =>{
      handleQuantity(id, count)
    }, [count, id])

  return <div className="cartItem">
    <img src={`${img}`} alt="" />
    <div className="itembody">
        <h2>{title}</h2>
        <p><span>₦{price}</span></p>
        <Quantity count={count} setCount={setCount} />
    </div>
    <div className="rmvbtn">
            <RiDeleteBinLine size={20} color={'red'} cursor={'pointer'} onClick={() => removeFromCart(id)}/>
    </div>
  </div>
};

export default CartItem;
