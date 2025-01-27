import Cart from "@/components/Cart";
import CheckOut from "@/components/CheckOut";
import Dashboard from "@/components/Layouts/Dashboard";
import MainLayout from "@/components/Layouts/MainLayouts";
import Payment from "@/components/Payment";
import About from "@/pages/About/About";
import CategoryPage from "@/pages/category/CategoryPage";
import Contact from "@/pages/Contact/Contact";
import AddProduct from "@/pages/Dashboard/AddProduct";
import AllProducts from "@/pages/Dashboard/AllProducts";

import UpdateItem from "@/pages/Dashboard/UpdateItem";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/Product/ProductDetails";
import Products from "@/pages/Products/Products";
// import MovieDetails from "@/pages/Movies/MovieDetails";
// import Movies from "@/pages/Movies/Movies";
import NotFound from "@/pages/Shared/NotFound";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "checkout/payment",
        element: <Payment />,
      },
      {
        path: "/items/:id",
        element: <ProductDetails />,
        loader: ({params}) => fetch(`https://batch-3-assignament-4-floramart-server.vercel.app/api/products/${params.id}`)
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // {
      //   index: true,
      //   element: <Home />,
      // },
      // {
      //   path: "/",
      //   element: <Dashboard />,
      // },
      {
        path: "addItems",
        element: <AddProduct />,
      },
      
      {
        path: "allProducts",
        element: <AllProducts />,
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem/>,
        loader: ({params}) => fetch(`https://batch-3-assignament-4-floramart-server.vercel.app/api/products/${params.id}`)
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
