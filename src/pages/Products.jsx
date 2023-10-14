import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { AiOutlineClose } from 'react-icons/ai'
import ProductList from "../components/ProductList";
import "../styles/products.css";

const Products = () => {
  const param = useParams().id;
  const [sort, setSort] = useState("");
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { products, loading } = useFetch(
    `brands?populate=*&[filters][categories][title][$eq]=${param}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedBrand((prev) =>
      isChecked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="container">
      <div className={`left ${isFilterOpen ? "isOpen" : ""}`}>
        <div className="left_top">
          <h4>Filter</h4>
          <AiOutlineClose size={18} color={'red'} className='filter_close' onClick={() => setIsFilterOpen(false)} />
        </div>
        <div className="filter">
          <div className="brand">
            <h4>By Brands</h4>
            {products?.map((item) => (
              <div className="input_item" key={item.id}>
                <input
                  type="checkbox"
                  id={item?.attributes.title}
                  value={item?.attributes.title}
                  onChange={handleChange}
                />
                <label htmlFor={item?.attributes.title}>
                  {item?.attributes.title}
                </label>
              </div>
            ))}
          </div>
          <div className="sort">
            <h4>Sort by</h4>
            <div className="input_item">
              <input
                type="radio"
                name="price"
                id="asc"
                value="asc"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="input_item">
              <input
                type="radio"
                name="price"
                id="desc"
                value="desc"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <ProductList
          param={param}
          brand={selectedBrand}
          sort={sort}
          setIsFilterOpen={setIsFilterOpen}
        />
      </div>
    </div>
  );
};

export default Products;
