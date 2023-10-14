import { useContext } from "react";
import { useState } from "react";
import { useFetch } from "../hook/useFetch";
import { CartContext } from "../App";
import Card from "../UI/card/Card";
import Loader from "../UI/loader/Loader";
import Pagination from "../UI/pagination/Pagination";


const ProductList = ({ param, brand, sort, setIsFilterOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 20;

  const filter = brand
    .map((item) => `&[filters][brands][title][$eq]=${item}`)
    .join("");

  // console.log(filter)

  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(CartContext);

  const { products, loading } = useFetch(
    `products?populate=*&[filters][categories][title][$eq]=${param}${
      brand ? filter : ""
    }${sort ? `&sort=price:${sort}` : `&sort=id:desc`}`
  );


  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentProducts = products?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <h2 className="cate_title">{param}'s Category</h2>
      <h5 onClick={() => setIsFilterOpen(true)}>Filter</h5>
      {loading ? (
        <Loader />
      ) : (
        <div className="products">
          {currentProducts.map((item) => (
            <Card
              id={item?.id}
              key={item?.id}
              title={item?.attributes.title}
              price={item?.attributes.price}
              img={`${item?.attributes.img.data.attributes.url}`}
              handleAddToCart={() =>
                handleAddToCart(
                  {
                    id: item?.id,
                    title: item?.attributes.title,
                    price: item?.attributes.price,
                    priceId: item?.attributes?.priceId,
                    img: item?.attributes.img.data.attributes.url,
                  },
                  quantity
                )
              }
            />
          ))}
        </div>
      )}
      {products?.length > 20 && (
        <Pagination
          postsPerPage={postPerPage}
          totalPosts={products?.length}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default ProductList;
