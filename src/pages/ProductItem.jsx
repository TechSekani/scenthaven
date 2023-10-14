import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { CartContext } from "../App";
import Button from "../UI/Button";
import Loader from "../UI/loader/Loader";
import Quantity from "../UI/Quantiity";
import FeaturedCard from "../UI/featuredCard/FeaturedCard";

import "../styles/productItem.css";

const ProductItem = () => {
  const param = useParams().id;
  const [count, setCount] = useState(1);

  const { products, loading } = useFetch(`products/${param}?populate=*`);
  const ctx = useContext(CartContext);
  const data = {
    id: param,
    img: products?.attributes?.img?.data?.attributes?.url,
    title: products?.attributes?.title,
    price: products?.attributes?.price,
    priceId: products?.attributes?.priceId,
    inStock: products?.attributes?.inStock,
    brand: products?.attributes?.brands?.data?.[0].attributes?.title,
    category: products.attributes?.categories.data[0].attributes.title,
  };


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="product-item">
          <div className="product-item__image">
            <img src={`${data.img}`} alt="" />
          </div>
          <div className="product-item__info">
            <h2>{data.title}</h2>
            <div className="product-item__sub">
              {data?.inStock ? (
                <h4 className="inStock">In Stock</h4>
              ) : (
                <h4 className="outStock">Out Of Stock</h4>
              )}
              <h3>
                Price: <span>₦{data?.price}</span>
              </h3>
              <h4>
                Brand: <span>{data?.brand}</span>
              </h4>
            </div>
            <div className="product-item__btns">
              <div className="item_quantity">
                <h4>Quantity:</h4>
                <Quantity count={count} setCount={setCount} />
              </div>
              <Button
                text={"ADD TO CART"}
                onClick={(e) => ctx.handleAddToCart(data, count)}
              />
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <FeaturedCard
            title={"Product From Same Brand"}
            category={data.category}
            brand={data.brand}
          />
          <FeaturedCard title={"You might also like"} type={"bestSelling"} sort={'desc'} />
        </>
      )}
    </>
  );
};

export default ProductItem;
