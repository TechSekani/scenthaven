import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      });
      const data = await response.json();
      setLoading(false);
      setProducts(data.data);
    };

    fetchData();
  }, [url]);

  return { products, loading };
};
