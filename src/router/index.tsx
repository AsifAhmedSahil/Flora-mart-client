import Dashboard from "@/components/Layouts/Dashboard";
import MainLayout from "@/components/Layouts/MainLayouts";
import CategoryPage from "@/pages/category/CategoryPage";
import AddProduct from "@/pages/Dashboard/AddProduct";
import AllProducts from "@/pages/Dashboard/AllProducts";
import UpdateItem from "@/pages/Dashboard/UpdateItem";
import Home from "@/pages/Home/Home";
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
        loader: ({params}) => fetch(`http://localhost:5000/api/products/${params.id}`)
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
