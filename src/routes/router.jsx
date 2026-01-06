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
      {
        path: "*",
        element: (
          <div className="text-center text-red-400 text-4xl py-6">
            404 Not Found
          </div>
        ),
      },
    ],
  },
]);

export default router;
