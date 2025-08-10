import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import HomeForSale from "../Pages/Buys/HomeForSale";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buy/homes_for_sale",
    element: <HomeForSale />,
  },
]);
