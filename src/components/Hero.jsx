import hero from "../assets/heroimg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div className="hero">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 100, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="hero_text"
      >
        <h2>Where scents ignite your senses and dreams come alive.</h2>
        <p>Premium Quality Fragnants Available For Ladies And Gents</p>
        <motion.a
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 100, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          href="#category"
        >
          GET STARTED
        </motion.a>
      </motion.div>
      <img src={hero} alt="" className="hero_img" />
    </motion.div>
  );
};

export default Hero;
