import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import DetailsNews from "../pages/DetailsNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        Component: Home,
      },
      {
        path: "/category/news/:id",
        Component: CategoryNews,
      },
      {
        path: "/category/news/details/:id",
        Component: DetailsNews,
      },
    ],
  },
]);

export default router;
