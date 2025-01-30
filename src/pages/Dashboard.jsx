import { useEffect, useState } from "react";
import { getLocalStorageData, setLocalStorageData } from "../utilits";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import GroupImg from "../assets/Group.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "cart";

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setData(getLocalStorageData(activeTab));
    // if (activeTab === "cart") {
    //   setData(getLocalStorageData("cart"));
    // } else {
    //   setData(getLocalStorageData("wishlist"));
    // }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
    // toast.success(`Switched to ${tab}`);
  };

  // Delete item from localStorage
  const handleDeleteItem = (id) => {
    const updatedData = data.filter((item) => item.product_id !== id);
    setData(updatedData);
    setLocalStorageData(activeTab, updatedData);
    toast.error("Item removed!");

    // Trigger navbar update
    document.dispatchEvent(new Event("updateNavbarCounts"));
  };

  // Move item from WishList to Cart
  const handleAddToCart = (item) => {
    const cartItems = getLocalStorageData("cart") || [];
    const itemExists = cartItems.some(
      (cartItems) => cartItems.product_id === item.product_id
    );

    if (!itemExists) {
      const updatedCart = [...cartItems, item];
      setLocalStorageData("cart", updatedCart);
      toast.success("Added to cart!");

      // Remove from wishlist after adding to cart
      if (activeTab === "wishlist") {
        handleDeleteItem(item.product_id);
      }
    } else {
      toast.error("Item already in cart!");
      document.dispatchEvent(new Event("updateNavbarCounts"));
    }
    // Trigger navbar update
    document.dispatchEvent(new Event("updateNavbarCounts"));
  };

  // Sort items by price
  const handleSortByPrice = () => {
    const sortedData = [...data].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setData(sortedData);
  };

  // Purchase confirmation -Opens Modal
  const handlePurchase = () => {
    if (data.length === 0) {
      toast.error("No items in cart to purchase!");
      return;
    }
    setShowModal(true);
  };

  // Close modal and clear cart
  const handleCloseModel = () => {
    setShowModal(false);
    setData([]);
    setLocalStorageData("cart", []);
    document.dispatchEvent(new Event("updateNavbarCounts"));
    // Redirect to home page
    navigate("/");
  };

  return (
    <>
      <div className="bg-[#9538E2] pb-6 md:pb-8 p-4 pt-6 md:pt-8 rounded-md">
        <h1 className="text-lg -mt-2 md:2xl lg:text-3xl font-semibold md:font-bold text-white text-center">
          Dashboard
        </h1>
        <p className="text-normal text-gray-50 text-center mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center items-center space-x-2 my-8">
          <button
            onClick={() => handleTabClick("cart")}
            className={`btn rounded-full px-8 py-2 ${
              activeTab === "cart"
                ? "bg-white text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleTabClick("wishlist")}
            className={`btn rounded-full px-8 py-2 ${
              activeTab === "wishlist"
                ? "bg-white text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="md:flex justify-between items-center space-x-2 py-6">
        <div>
          <h3 className="text-black text-lg font-semibold">
            {activeTab === "cart" ? "Cart" : "Wishlist"}
          </h3>
        </div>
        {activeTab === "cart" && (
          <div className="md:flex justify-center space-y-5 md:space-x-4">
            <h3 className="text-black text-lg font-semibold mt-2">
              Total Cost: $
              {data.reduce((total, item) => total + parseFloat(item.price), 0)}
            </h3>
            <button
              onClick={handleSortByPrice}
              className={`btn rounded-full px-8 py-2 ${
                activeTab === "cart"
                  ? "bg-white text-[#9538E2]"
                  : "bg-[#9538E2] text-white"
              }`}
            >
              Sort by price
            </button>
            <button
              onClick={handlePurchase}
              className={`btn rounded-full px-8 py-2 ${
                activeTab === "wishlist"
                  ? "bg-white text-[#9538E2]"
                  : "bg-[#9538E2] text-white"
              }`}
            >
              Purchase
            </button>
          </div>
        )}
      </div>
      <div className="py-12">
        {data.length === 0 ? (
          <p className="text-center text-gray-500">
            No items found in {activeTab}.
          </p>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="relative md:flex bg-white rounded-md p-6 space-x-4 md:space-x-8 items-center item-card mb-2"
            >
              <img
                className="w-40 h-20 md:w-30 md:h-30 rounded-md"
                src={item.product_image}
                alt={item.product_tilte}
              />
              <div className="flex-1">
                <p className="text-lg font-semibold">{item.product_title}</p>
                <p className="text-gray-500 my-2">Price: ${item.price}</p>
                <p className="text-gray-400">{item.description}</p>
                {activeTab === "wishlist" && (
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-2 px-4 py-2 bg-[#9538E2] text-white rounded-full cursor-pointer"
                  >
                    Add to Cart
                  </button>
                )}
                <button
                  onClick={() => handleDeleteItem(item.product_id)}
                  className="absolute top-2 md:top-4 p-1 border border-red-400 rounded-full cursor-pointer right-3 md:right-4 text-red-500 text-xl"
                >
                  <RxCross2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {/* success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center mb-2">
              <img src={GroupImg} alt="GroupImg" />
            </div>
            <h2 className="text-2xl font-bold text-green-600">
              Purchase Successful!
            </h2>
            <p>Thank you for your purchase</p>
            <button
              onClick={handleCloseModel}
              className="mt-4 px-6 py-2 bg-[#9538e2] text-white rounded-md"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
