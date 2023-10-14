import { useState } from "react";
import Button from "../UI/Button";
import "../styles/about.css";

const About = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      name: "",
      email: "",
      message: "",
    });
    alert("You have submitted the form, We would get back to you shortly.");
  };

  return (
    <div className="aboutus">
      <h2>About Us</h2>
      <article>
        <p>
          <span>
            Greetings from ScentHaven,
            <br /> Where scents ignite your senses and dreams come alive.
          </span>
          <br />
          We at ScentHaven think that a lovely perfume has the ability to
          capture attention, bring back memories, and improve one's presence. We
          are devoted to providing you with an amazing variety of scents that
          express refinement, luxury, and originality since we are enthusiastic
          about the art of perfumery.
        </p>
        <p>
          <span>Our Tale</span>
          <br />A mutual passion for all things aromatic led to the creation of
          ScentHaven. We understood the transforming power of smells and the
          effect they have on our lives since we are ardent perfume fans. We
          started out on a quest to choose a collection of scents that would not
          only boost individual style but also produce an unparalleled sensory
          experience.
        </p>
        <p>
          <span>Our Principles</span>
          <br />
          At ScentHaven, we think that selecting the ideal scent is a private
          and sensitive process. It is a way to convey one's uniqueness and a
          signature that is memorable. We are proud to provide a wide selection
          of fragrances from well-known companies, specialized craftsmen, and
          up-and-coming artists since we accept the diversity of smell tastes.
          <br />
          Each scent is hand-selected, and we make sure it exhibits the highest
          standards of workmanship, quality, and originality. Superiority in
          both Quality and Authenticity When it comes to scents, we recognize
          the value of authenticity. For this reason, we purchase our goods
          directly from reputed perfumeries and accredited wholesalers. Every
          perfume you find at ScentHaven is guaranteed to be 100 percent real
          and has been lovingly cared for to keep it in perfect shape.
        </p>
        <p>
          <span>Experiential ScentHaven</span>
          <br />
          From the minute you enter our online store, ScentHaven is dedicated to
          giving you an outstanding customer experience. Your demands have been
          taken into consideration while designing our user-friendly website,
          which makes it simple to browse our sizable selection, find your
          favorite smells, and discover fresh olfactory delights. Every step of
          the way,
          <br />
          Our team of trained scent specialists is ready to help you. We are
          committed to assisting you in discovering your ideal fragrance,
          whether you want assistance in picking the ideal smell for a specific
          event or want tailored advice based on your tastes.
        </p>
        <p>
          Thank you for choosing ScentHaven as your fragrance destination. We
          look forward to embarking on this fragrant journey with you.
        </p>
      </article>

      <form method="post" className="aboutform" onSubmit={handleSubmit}>
        <h4>Get In Touch With Us</h4>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={data.message}
            onChange={(e) =>
              setData((prev) => ({ ...prev, message: e.target.value }))
            }
          ></textarea>
        </div>
        <Button text={"SUBMIT"} />
      </form>
    </div>
  );
};

export default About;
