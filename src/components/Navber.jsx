import { Link, NavLink, useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";

const Navber = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === "/";
  return (
    <div className="pt-4 px-14 lg:px-24 backdrop-blur-xl bg-white/20 z-50 w-full fixed">
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
            <div className="border border-gray-300 rounded-full bg-white p-2">
              <Link>
                <GiShoppingCart size={14} />
              </Link>
            </div>
            <div className="border border-gray-300 rounded-full bg-white p-2">
              <Link>
                <GrFavorite size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
