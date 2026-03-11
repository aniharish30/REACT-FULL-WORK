import React, { useEffect, useState } from "react";

const useFetchProductDetailData = (product) => {
  const [produtDetailData, setProductDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductDetailData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/${product?.produtId}`,
      );
      const data = await res.json();
      setProductDetailData(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error in ProductDetails fetch call", error);
    }
  };

  useEffect(() => {
    fetchProductDetailData();
  }, []);
  return { isLoading, produtDetailData };
};

export default useFetchProductDetailData;
