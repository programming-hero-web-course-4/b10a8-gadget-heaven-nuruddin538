import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductsCard from "../components/productsCard";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductsCard />,
            loader: () => fetch("../productData.json"),
          },
          {
            path: "/category/:category",
            element: <ProductsCard />,
            loader: () => fetch("../productData.json"),
          },
        ],
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("../productData.json"),
      },
      {
        path: "/statistic",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: () => fetch("../productData.json"),
      },
    ],
  },
]);

export { routes };
