import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import HomeForSale from "../Pages/Buys/HomeForSale";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";
import ForgetPasswordEmail from "../Pages/Authentication/ForgetPasswordEmail";
import ForgetPasswordVerifyEmail from "../Pages/Authentication/ForgetPasswordVerifyEmail";
import NewPassword from "../Pages/Authentication/NewPassword";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Dashboard from "../Pages/SellingListingFlow/Dashboard";
import SellProperties from "../Pages/SellingListingFlow/SellProperties";
import RootSubmitted from "../Pages/SellingListingFlow/SubmittedOffer/RootPage";
import OfferSummary from "../Pages/SellingListingFlow/SubmittedOffer/OfferSummary";
import OfferDetails from "../Pages/SellingListingFlow/SubmittedOffer/OfferDetails";
import CounterOffer from "../Pages/SellingListingFlow/SubmittedOffer/CounterOffer";
import RequestHighest from "../Pages/SellingListingFlow/SubmittedOffer/RequestHighest";
import SelectRecipient from "../Pages/SellingListingFlow/SubmittedOffer/SelectRecipient";
// import BuyProperties from "../Pages/SellingListingFlow/BuyProperties";
import ListProperty from "../Pages/SellingListingFlow/ListProperty";
import ListPropertyFlow from "../Pages/SellingListingFlow/ListYouPropertySequence/ListPropertyFlow";
import SocialMediaSharing from "../Pages/SellingListingFlow/ListYouPropertySequence/StartEscrow/SocialMediaSharing";
import SelectSettlementAgent from "../Pages/SellingListingFlow/ListYouPropertySequence/StartEscrow/SelectSettlementAgent";
import SettlementTasks from "../Pages/SellingListingFlow/ListYouPropertySequence/StartEscrow/SettlementTasks";
import SettlementTask1 from "../Pages/SellingListingFlow/ListYouPropertySequence/StartEscrow/SattlementTask1";
import SettlementTasks2 from "../Pages/SellingListingFlow/ListYouPropertySequence/StartEscrow/SettlementTasks2";
import SettlementTask3 from "../Pages/SellingListingFlow/ListYouPropertySequence/StartEscrow/SettlementTask3";
import SettlementTask4 from "../Pages/SellingListingFlow/ListYouPropertySequence/StartEscrow/SettlementTask4";
import RootPage from "../Pages/SellingListingFlow/BuyProperties/RootPage";
import Details from "../Pages/SellingListingFlow/BuyProperties/Details";

// import OfferSummary from "../Pages/SellingListingFlow/SubmittedOffer/OfferSummary";
// import OfferDetails from "../Pages/SellingListingFlow/SubmittedOffer/OfferDetails";
// import CounterOffer from "../Pages/SellingListingFlow/SubmittedOffer/CounterOffer";
// import RequestHighest from "../Pages/SellingListingFlow/SubmittedOffer/RequestHighest";
// import SelectRecipient from "../Pages/SellingListingFlow/SubmittedOffer/SelectRecipient";


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
  {
    path: "/homeforsale/property_details",
    element: <PropertyDetails />,
  },
  {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
      {
        path: "selling_properties",
        element: <SellProperties />,
      },
      {
        path: "selling_properties/list_property",
        element: <ListProperty />
      },
      {
        path: "selling_properties/list_property/property_information",
        element: <ListPropertyFlow />
      },
      {
        path: "submitted_offer",
        element: <RootSubmitted />,
        children: [
          { path: "offer_summary", element: <OfferSummary /> },
          { path: "offer_details", element: <OfferDetails /> },
          { path: "counter_offer", element: <CounterOffer /> },
          { path: "request_highest", element: <RequestHighest /> },
          { path: "select_recipient", element: <SelectRecipient /> },
        ],
      },
  { path: "buy_properties", element: <RootPage /> },
  { path: "buy_properties/details", element: <Details /> },
      {
        path: "selling_properties/start_escrow/social_media_sharing",
        element: <SocialMediaSharing />,
      },
      {
        path: "selling_properties/start_escrow/select_settlement_agent",
        element: <SelectSettlementAgent />,
      },
      {
        path: "selling_properties/start_escrow/settlement_tasks",
        element: <SettlementTasks />,
      },
      {
        path: "selling_properties/start_escrow/settlement_task1",
        element: <SettlementTask1 />,
      },
      {
        path: "selling_properties/start_escrow/settlement_tasks2",
        element: <SettlementTasks2 />,
      },
      {
        path: "selling_properties/start_escrow/settlement_task3",
        element: <SettlementTask3 />,
      },
      {
        path: "selling_properties/start_escrow/settlement_task4",
        element: <SettlementTask4 />,
      },
    ],
  },

]);
