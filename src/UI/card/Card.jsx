import { Link } from "react-router-dom";
import Button from "../Button";
import "./card.css";
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 100, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="card"
    >
      <Link to={`/product/${props.id}`}>
        <img src={props.img} alt={props.title} className="card_img" />
        <div className="card_body">
          <h4 className="card_title" title={props.title}>
            {props.title}
          </h4>
          <h4 className="card_price">{`₦${props.price}`}</h4>
        </div>
      </Link>
      <Button text={"ADD TO CART"} onClick={props.handleAddToCart} />
    </motion.div>
  );
};

export default Card;
