import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const ProductsCard = () => {
  const data = useLoaderData();
  //   console.log(data);
  const navigate = useNavigate();

  const { category: slug } = useParams();
  console.log(slug);
  //   console.log(slug);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (slug === "all") {
      // Show all products when 'All Categories' is active
      setProducts(data.slice(0, 12));
    } else if (slug) {
      // Filter products by slug
      const filteredProducts = data.filter(
        (product) => product.category.toLowerCase() === slug.toLowerCase()
      );
      setProducts(filteredProducts);
    } else {
      setProducts(data.slice(0, 6));
    }
  }, [slug, data]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {products.length > 0 ? (
          products.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <p className="text-center text-2xl text-gray-500">
            No Products Found.
          </p>
        )}
      </div>
      <button
        className="btn btn-primary w-28"
        onClick={() => navigate("/products")}
      >
        View All
      </button>
    </>
  );
};

export default ProductsCard;
