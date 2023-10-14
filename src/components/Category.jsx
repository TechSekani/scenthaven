import Button from "../UI/Button";
import men from "../assets/men.jpg";
import women from "../assets/women.jpeg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "../styles/home.css";

const Category = () => {
  return (
    <div className="category" id="category">
      <div className="con men">
        <img src={men} alt="" />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 100, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="con_body"
        >
          <h3>Men's Perfume Category</h3>
          <p>
            Explore our exceptional range of fragrances designed exclusively for
            the modern man. From sophisticated classics to daring contemporary
            scents, our Men's category showcases an array of captivating
            fragrances that embody masculinity, confidence, and style.
          </p>
          <Link to="products/men">
            <Button text={"EXPLORE"} />
          </Link>
        </motion.div>
      </div>

      <div className="con women">
        <img src={women} alt="" />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 100, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="con_body">
          <h3>Women's Perfume Category</h3>
          <p>
            where you can explore a captivating selection of fragrances designed
            exclusively for the modern woman. From enchanting florals to
            alluring orientals, our collection celebrates femininity, elegance,
            and individuality.
          </p>
          <Link to="products/women">
            <Button text={"EXPLORE"} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Category;
