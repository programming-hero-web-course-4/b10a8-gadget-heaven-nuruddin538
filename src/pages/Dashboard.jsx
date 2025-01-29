import { useEffect, useState } from "react";
import { getLocalStorageData } from "../utilits";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "cart";

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (activeTab === "cart") {
      setData(getLocalStorageData("cart"));
    } else {
      setData(getLocalStorageData("wishlist"));
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
              onClick={() => handleTabClick("cart")}
              className={`btn rounded-full px-8 py-2 ${
                activeTab === "cart"
                  ? "bg-white text-[#9538E2]"
                  : "bg-[#9538E2] text-white"
              }`}
            >
              Sort by price
            </button>
            <button
              onClick={() => handleTabClick("wishlist")}
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
        {data.map((item) => (
          <div
            key={item.id}
            className="md:flex bg-white rounded-md p-6 space-x-4 md:space-x-8 items-center item-card mb-2"
          >
            <img
              className="w-40 h-20 md:w-30 md:h-30 rounded-md"
              src={item.product_image}
              alt={item.product_tilte}
            />
            <div>
              <p>{item.product_title}</p>
              <p className="text-gray-500 my-2">Price: ${item.price}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
