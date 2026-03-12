import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import Comments from "../pages/Comments";
// import ProductDetail from "../pages/ProductDetail";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact/Contact";
import ImagePage from "../pages/ImagePage";
import { lazy, Suspense } from "react";
import Expensive from "../pages/Expensive";
import ReactNormalForm from "../pages/Contact/ReactNormalForm";
import ReactHookForm from "../pages/Contact/ReactHookForm";

const ProductDetails = lazy(() => import("../pages/ProductDetail"));

const Route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // navbar , footer
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/productdetail/:produtId", // /productDetail/asdfasdf
        element: (
          <Suspense fallback={"<<<<Loading...>>>>"}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/imagepage",
        element: <ImagePage />,
      },
      {
        path: "/expensive",
        element: <Expensive />,
      },
      {
        path: "hookform",
        element: <ReactHookForm />,
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

export default Route;
