import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BiCheckboxSquare } from "react-icons/bi";
import { IoStarSharp } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { addToStorage, getLocalStorageData } from "../utilits";
import toast from "react-hot-toast";

const MAX_CART_TOTAL = 3000;

const ProductDetails = () => {
  const [cart, setCart] = useState(getLocalStorageData("cart") || []);
  const [wishlist, setWishlist] = useState(
    getLocalStorageData("wishlist") || []
  );
  const data = useLoaderData();
  // console.log(data);
  const { product_id } = useParams();
  // console.log(product_id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const singleData = data.find((product) => product.product_id == product_id);
    setProduct(singleData);
  }, [data, product_id]);

  // Calculate total cart price
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const handleAddToCart = () => {
    if (cartTotal + product.price > MAX_CART_TOTAL) {
      toast.error("Cart total cannot exceed $1000!");
      return;
    }

    if (addToStorage("cart", product)) {
      toast.success("Added to Cart!");
      setCart([...cart, product]);
      document.dispatchEvent(new Event("updateNavbarCounts"));
    } else {
      toast.error("Already exists in Cart!");
    }
  };

  useEffect(() => {
    setWishlist(getLocalStorageData("wishlist") || []);
  }, []);

  const handleAddToWishlist = () => {
    if (addToStorage("wishlist", product)) {
      toast.success("Added to Wishlist!");
      setWishlist([...wishlist, product]);
      document.dispatchEvent(new Event("updateNavbarCounts"));
    } else {
      toast.error("Already exists in Wishlist!");
      document.dispatchEvent(new Event("updateNavbarCounts"));
    }
  };

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    specification,
    rating,
  } = product;
  // console.log(data);

  // Function to render dynamic stars
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <IoStarSharp key={`full-${index}`} className="text-yellow-500" />
          ))}
        {halfStar && <IoStarHalf className="text-yellow-500" />}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <IoStarSharp key={`empty-${index}`} className="text-gray-300" />
          ))}
      </>
    );
  };

  return (
    <div>
      <div className="w-full bg-[#9538E2] pb-16 md:pb-24 lg:pb-28 p-4 pt-6 md:pt-8 rounded-md">
        <h1 className="text-lg -mt-2 md:2xl lg:text-3xl font-semibold md:font-bold text-white text-center">
          Must-Have Gadgets and Accessories for Your Electronics
        </h1>
        <p className="text-sm md:text-normal text-gray-50 text-center mt-4">
          Essential Electric Product Accessories for Everyday Use. Trendy and
          Useful Accessories <br /> for All Your Electric Needs. Affordable and
          Innovative Electric Product Add-ons
        </p>
      </div>
      <div className="px-4 md:px-16 lg:px-24 z-20 -mt-12 md:-mt-16 lg:-mt-20">
        <div className="border p-4 rounded-md border-gray-200 bg-white grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="">
            <img
              className="rounded-lg w-full md:h-[200px]"
              src={product_image}
              alt=""
            />
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold">{product_title}</h3>
            <h4>Price: ${price}</h4>
            <button className="btn rounded-full my-1 text-green-300 border-green-400">
              {availability === "true" ? "In Stock" : "Out of Stock"}
            </button>
            <p className="text-gray-400 py-1">{description}</p>
            <p className="text-lg font-semibold my-1">Specification: </p>
            <ul className="list-decimal list-inside text-gray-600">
              {specification?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="font-medium flex items-center my-1">
              Rating
              <BiCheckboxSquare size={20} />
            </p>
            <p className="flex items-center">
              <span className="flex">{renderRatingStars(rating || 0)}</span>
              <span className="ml-10 md:ml-14 bg-gray-200 rounded-full  px-2 py-1 text-sm">
                {rating || "0"}
              </span>
            </p>
            <div className="flex py-1 space-x-1 md:space-x-8 items-center">
              <button
                onClick={handleAddToCart}
                className="btn btn-primary rounded-full"
              >
                Add to Card <MdAddShoppingCart size={16} />
              </button>
              <div
                onClick={
                  wishlist.some(
                    (item) => item.product_id === product.product_id
                  )
                    ? null
                    : handleAddToWishlist
                }
                className={`border cursor-pointer border-gray-200 p-1 md:p-2 rounded-full ${
                  wishlist.some(
                    (item) => item.product_id === product.product_id
                  )
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <CiHeart size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
