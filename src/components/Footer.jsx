import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import Button from '../UI/Button';
import '../styles/footer.css'


const Footer = () => {
  return (
    <footer className="">
      
      <h2 className="logo">ScentHaven</h2>
      <div className="footer-links">
            <h4>Contact Us</h4>
            <h5>No 12, block 30, Festival Mall, Lagos State</h5>
            <a href="mailto:olukoluu@gmail.com">info@scenthaven.com</a>
            <a href="tel:+1800-555-5555">(800) 555-5555</a>
            <div className="social">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><AiOutlineFacebook size={25}/></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><AiOutlineInstagram size={25}/></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><AiOutlineTwitter size={25}/></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><AiOutlineLinkedin size={25}/></a>
            </div>
      </div>
      
      <div className="newsletter">
        <p>Subscribe to our newsletter to get the latest product updates.</p>
        <form>
            <input type="email" placeholder="Enter email" />
            <Button text={'Subscribe'}/>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
