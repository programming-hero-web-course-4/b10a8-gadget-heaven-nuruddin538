import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { useEffect, useState } from "react";
import { getLocalStorageData } from "../utilits";

const Navber = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to update counts without page refresh
  const updateCounts = () => {
    setCartCount(getLocalStorageData("cart")?.length || 0);
    setWishlistCount(getLocalStorageData("wishlist")?.length || 0);
  };

  useEffect(() => {
    updateCounts();

    // Listen to storage events to update counts dynamically
    const handleCustomStorageUpdate = () => updateCounts();
    document.addEventListener("updateNavbarCounts", handleCustomStorageUpdate);

    return () => {
      document.removeEventListener(
        "updateNavbarCounts",
        handleCustomStorageUpdate
      );
    };
  }, []);

  const isHomeActive = location.pathname === "/";

  // Dynamic badge style based on route
  const badgeBg = isHomeActive
    ? "bg-white text-[#9538E2]"
    : "bg-[#9538E2] text-white";

  return (
    <div className="pt-4 px-8 md:px-12 lg:px-24 backdrop-blur-xl bg-white/20 z-50 w-full fixed">
      <div
        className={`navbar ${
          isHomeActive ? "rounded-t-md bg-[#9538E2] px-4" : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2"
            >
              <NavLink
                className={({ isActive }) =>
                  `flex font-bold ${
                    isActive
                      ? "items-center text-white bg-gray-600 px-4 py-2 rounded-md"
                      : "hover:text-blue-800"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex font-bold ${
                    isActive
                      ? "items-center text-white bg-gray-600 px-4 py-2 rounded-md"
                      : "hover:text-blue-800"
                  }`
                }
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex font-bold ${
                    isActive
                      ? "items-center text-white bg-gray-600 px-4 py-2 rounded-md"
                      : "hover:text-blue-800"
                  }`
                }
                to="/statistic"
              >
                statistic
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex font-bold ${
                    isActive
                      ? "items-center text-white bg-gray-600 px-4 py-2 rounded-md"
                      : "hover:text-blue-800"
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <Link
            className={`text-xs font-normal md:font-bold md:text-xl lg:text-2xl cursor-pointer ${
              isHomeActive ? "text-white font-extrabold" : ""
            }`}
            to="/"
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink
              className={({ isActive }) =>
                `flex font-bold ${
                  isActive
                    ? "items-center text-white bg-gray-600 px-4 py-2 rounded-md"
                    : "hover:text-blue-800"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex font-bold ${
                  isActive
                    ? "items-center text-white bg-gray-600 px-4 py-2 rounded-md"
                    : "hover:text-blue-800"
                }`
              }
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex font-bold ${
                  isActive
                    ? "items-center text-white bg-gray-600 px-4 py-2 rounded-md"
                    : "hover:text-blue-800"
                }`
              }
              to="/statistic"
            >
              Statistic
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex font-bold ${
                  isActive
                    ? "items-center text-white bg-gray-600 px-4 py-2 rounded-md"
                    : "hover:text-blue-800"
                }`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center items-center space-x-4">
            <div className="relative">
              {cartCount > 0 && (
                <span
                  className={`absolute -top-2 -right-3 ${badgeBg} border border-[#9538E2] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full`}
                >
                  {cartCount}
                </span>
              )}
              <div
                onClick={() => navigate("/dashboard?tab=cart")}
                className="border border-gray-300 rounded-full bg-white p-2 cursor-pointer"
              >
                <GiShoppingCart size={14} />
              </div>
            </div>
            <div className="border border-gray-300 rounded-full bg-white p-2">
              <div className="relative">
                {wishlistCount > 0 && (
                  <span
                    className={`absolute -top-4 -right-5 ${badgeBg} border-[#9538E2] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full`}
                  >
                    {wishlistCount}
                  </span>
                )}
              </div>
              <div
                onClick={() => navigate("/dashboard?tab=wishlist")}
                className="cursor-pointer"
              >
                <GrFavorite size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
