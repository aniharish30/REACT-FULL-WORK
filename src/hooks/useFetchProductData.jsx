import React, { useEffect, useState } from "react";

const useFetchProductData = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductData(data.products); // render
      setIsLoading(false);
    } catch (error) {
      console.log("Fetch product data error:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return { productData, isLoading };
};

export default useFetchProductData;
