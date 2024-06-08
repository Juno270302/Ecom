import React from "react";
import { useFetchProductQuery } from "../redux/api/productApiSlice";
import Product from "../components/Product";
import Slide from "../components/Slide";

const Home = () => {
  const { data: products, isLoading, isError } = useFetchProductQuery();

  return (
    <div className="">
      <Slide />
      <div>
        <h1>Special Product</h1>
        <div className="grid grid-cols-4">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
