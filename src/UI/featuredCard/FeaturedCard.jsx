import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useFetch } from "../../hook/useFetch";
import { useContext } from "react";
import Card from "../card/Card";
import { CartContext } from "../../App";
import { useState } from "react";

import "./featuredCard.css";
import Loader from "../loader/Loader";

const FeaturedCard = ({ title, type, brand, category, sort }) => {
  const { products, loading } = useFetch(
    `products?populate=*${
      category ? `&[filters][categories][title][$eq]=${category}` : ""
    }${
      brand ? `&[filters][brands][title][$eq]=${brand}` : ""
    }${type ? `&[filters][${type}][$eq]=true` : ""}${
      sort ? `&sort=id:${sort}` : ""
    }`
  );

  const [quantity, setQuantity] = useState(1);
  const ctx = useContext(CartContext);

  return (
    <div className="featuredcard">
      <h2>{title}</h2>
      <div >
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          navigation
          breakpoints={{
            0: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 5,
            },
          }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {loading ? (
            <Loader />
          ) : (
            products?.slice(0, 8)?.map((item) => (
              <SwiperSlide key={item.id}>
                <Card
                  id={item.id}
                  title={item.attributes.title}
                  price={item.attributes.price}
                  img={`${item.attributes.img.data.attributes.url}`}
                  handleAddToCart={() =>
                    ctx.handleAddToCart(
                      {
                        id: item.id,
                        title: item.attributes.title,
                        price: item.attributes.price,
                        priceId: item.attributes.priceId,
                        img: item.attributes.img.data.attributes.url,
                      },
                      quantity
                    )
                  }
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCard;
