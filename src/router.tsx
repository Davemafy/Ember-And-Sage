import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./components/layout/root-layout";

import Home from "./pages/home";
import Menu from "./pages/menu";
import DishDetails from "./pages/dish-details";
import Reservations from "./pages/reservations";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import OrderSuccess from "./pages/order-success";
import OrderTracking from "./pages/order-tracking";
import NotFound from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "menu/:dishId",
        element: <DishDetails />,
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
      {
        path: "gallery",
        element: <Gallery />,
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
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order-success",
        element: <OrderSuccess />,
      },
      {
        path: "order-tracking",
        element: <OrderTracking />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
