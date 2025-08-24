import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import HomeForSale from "../Pages/Buys/HomeForSale";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";
import ForgetPasswordEmail from "../Pages/Authentication/ForgetPasswordEmail";
import ForgetPasswordVerifyEmail from "../Pages/Authentication/ForgetPasswordVerifyEmail";
import NewPassword from "../Pages/Authentication/NewPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buy/homes_for_sale",
    element: <HomeForSale />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot_password_email",
    element: <ForgetPasswordEmail />,
  },
  {
    path: "/forgot_password_verify_email",
    element: <ForgetPasswordVerifyEmail />,
  },
  {
    path: "/new_password",
    element: <NewPassword />,
  },
]);
