import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Products = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);

  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sorted = [...data].sort((a, b) => a.price - b.price);
      setProducts(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setProducts(sorted);
    }
  };

  return (
    <>
      <div className="">
        <div className="w-full bg-[#9538E2] pb-12 md:pb-20 p-4 pt-6 md:pt-8 rounded-md">
          <h1 className="text-lg -mt-2 md:2xl lg:text-3xl font-semibold md:font-bold text-white text-center">
            Must-Have Gadgets and Accessories for Your Electronics
          </h1>
          <p className="text-normal text-gray-50 text-center mt-4">
            Essential Electric Product Accessories for Everyday Use. Trendy and
            Useful Accessories <br /> for All Your Electric Needs. Affordable
            and Innovative Electric Product Add-ons
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div>
          <h1 className="text-[black] text-base md:text-xl">
            Electric accessories&apos;s by Price and Rating
          </h1>
        </div>
        <div className="space-x-4 space-y-2">
          <button
            onClick={() => handleSort("price")}
            className="btn btn-warning mt-2"
          >
            Sort By Price
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
