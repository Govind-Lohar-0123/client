import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Layout1 from "./components/pages/partials/Layout1.jsx";
import Home from "./components/pages/partials/Home";
import "./components/css/common.css";
import store from "./components/react_redux/store";
import { Provider } from "react-redux";
import { Box } from "@mui/material";
import Layout2 from "./components/pages/partials/Layout2.jsx";
import DetailView from "./components/pages/Detailes/DetailView";
import { Cart } from "./components/pages/Cart/Cart";

import FilterProduct from "./components/pages/FilterProduct/FilterProduct";


import MyOrders from "./components/pages/MyProfile/MyOrders/MyOrders";
import OrderDetails from "./components/pages/MyProfile/MyOrders/Order_details";
import ManageAddress from "./components/pages/MyProfile/ManageAddress";
import ProfileInfo from "./components/pages/MyProfile/Account/ProfileInfo.jsx"
import PanCard from "./components/pages/MyProfile/Account/PanCard.jsx";
import VPADetails from "./components/pages/MyProfile/Payment/VPADetails.jsx";
import SavedCards from "./components/pages/MyProfile/Payment/SavedCards.jsx";
import MyReviews from "./components/pages/MyProfile/MyStuff/MyReviews.jsx";
import Notification from "./components/pages/MyProfile/MyStuff/Notification.jsx";
import GiftCard from "./components/pages/MyProfile/Payment/GiftCard.jsx";
import MyCoupons from "./components/pages/MyProfile/MyStuff/MyCoupons.jsx";
import MyWishlist from "./components/pages/MyProfile/MyStuff/MyWishlist.jsx";
import SuperCoins from "./components/pages/MyProfile/SuperCoins.jsx";
import FlipkartZonePlus from "./components/pages/MyProfile/FlipkartZone.jsx";
import GiftCardStore from "./components/pages/MyProfile/GiftCardStore.jsx";
import Notifi_Preffrence from "./components/pages/More/Notifi_Prefre.jsx";
import HelpCare from "./components/pages/More/HelpCare.jsx";
import DownloadApp from "./components/pages/More/DownloadApp.jsx";
import Terms from "./components/pages/MyProfile/Account/Terms.jsx";
import { getCookie } from "./components/pages/auth/cookieAction.js";
import Login_Register from "./components/pages/auth/Login_Register.jsx"
import VideoDetails from "./components/pages/YouTube/VideosDetails/VideoDetails.jsx";
import YoutubeLayout from "./components/pages/YouTube/partials/YoutubeLayout.jsx";
import ForgetPassword from "./components/pages/auth/ForgetPassword.jsx";
import MyProfileLayout from "./components/pages/MyProfile/MyProfileLayout.jsx";

import ResetPassword from "./components/pages/auth/ResetPassword.jsx";

import ChangePassword from "./components/pages/auth/ChangePassword.jsx";

function App() {
  let token = getCookie("token");
  const email = getCookie("resetEmail");

  return (

    <Provider store={store}>
      <Box className="App">
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Layout2 />}>
              <Route path="login" element={<Login_Register />} />
              <Route path="register" element={<Login_Register />} />
            </Route>
            <Route path="/" element={<Layout1 />}>
              <Route index element={<Home />} />
              <Route path="/forget-password" element={<><ForgetPassword /></>} />

            </Route>

            {/* //Forget Password */}

            <Route path="/" element={(email != "" && email != undefined && email != null) ? <Layout1 /> : <Navigate to="/forget-password" />}>

              <Route path="/reset-password" element={<><ResetPassword /></>} />
            </Route>
            <Route path="/" element={<Layout2 />}>
              <Route path="the-gift-card-store" element={<GiftCardStore />} />
              <Route path="detail-view/:prod_id" element={<DetailView />} />
              <Route path="filter-product/:prod_id" element={<FilterProduct />} />
              <Route path="supercoins" element={<SuperCoins />} />
              <Route path="plus" element={<FlipkartZonePlus />} />
              <Route path="helpcentre" element={<HelpCare />} />
              <Route path="download-app" element={<DownloadApp />} />
              <Route path="communication-preferences" element={<Notifi_Preffrence />} />
            </Route>



            <Route path="/" element={(token != null && token != undefined) ? <YoutubeLayout /> : <Navigate to="/login" />}>
              <Route path="detail-video" element={<VideoDetails />} />
            </Route>



            {/* Account Handling Routes */}

            <Route path="/account" element={(token != null && token != undefined) ? <Layout2 /> : <Navigate to="/login" />}>
              <Route path="" element={<MyProfileLayout />}>
                <Route index element={<ProfileInfo />} />
                <Route path="addresses" element={<ManageAddress />} />

                <Route path="vpadetails" element={<VPADetails />} />
                <Route path="cardsdetails" element={<SavedCards />} />
                <Route path="rewards" element={<MyCoupons />} />
                <Route path="reviews" element={<MyReviews />} />
                <Route path="notification" element={<Notification />} />
                <Route path="wishlist" element={<MyWishlist />} />
                <Route path="pancard" element={<PanCard />} />
                <Route path="giftcard" element={<GiftCard />} />
              </Route>
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="orders" element={<MyOrders />} />
              <Route path="terms" element={<Terms />} />
              <Route path="view-carts" element={<Cart />} />
              <Route path="order_details/:order_id" element={<OrderDetails />} />
            </Route>

          </Routes>
        </BrowserRouter>

      </Box>
    </Provider >

  );
}

export default App;

