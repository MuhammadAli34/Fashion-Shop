import React from "react";
import ProductsCart from "./ProductsCart";

function Products({ products }) {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping every day
        </h1>
        <span className="w-20 h-[3px] bg-black "></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          adipisci tempora dignissimos ipsam nulla quidem quibusdam iusto
          aperiam minima, soluta consequatur officia sunt debitis nostrum
          dolores doloremque voluptatem asperiores quas.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((product, index) => (
          <ProductsCart key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
