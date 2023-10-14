import FeaturedCard from "../UI/featuredCard/FeaturedCard";
import Category from "../components/Category";
import Hero from "../components/Hero";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCard title={'Best Selling'} type={'bestSelling'} />
      <Category />
      <FeaturedCard title={'New Arrival'} type={'isNew'} sort={'desc'} />
    </>
  );
};

export default Home;
