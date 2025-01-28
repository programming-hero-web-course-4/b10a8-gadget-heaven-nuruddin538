import { Link } from "react-router-dom";

const Card = ({ product }) => {
  console.log(product);
  const { product_id, product_image, product_title, price, rating } =
    product || {};
  return (
    <div>
      <div className="flex relative">
        <div className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">
          <figure className="w-full h-48 overflow-hidden">
            <img className="text-xl" src={product_image} alt="" />
          </figure>
          <div className="p-4">
            <h1 className="text-xl">{product_title}</h1>
            <p className="text-gray-500 py-2">Price: ${price}</p>
            <p className="text-gray-500 py-1">Rating: {rating}</p>
            <Link to={`/product/${product_id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
