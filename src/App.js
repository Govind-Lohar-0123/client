import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Layout from "./components/pages/partials/Layout";
import Home from "./components/pages/partials/Home";
import "./components/css/common.css";
import store from "./components/react_redux/store";
import { Provider } from "react-redux";
import { Box } from "@mui/material";

import DetailView from "./components/pages/Detailes/DetailView";
import { Cart } from "./components/pages/Cart/Cart";
import Checkout from "./components/pages/Checkout/Checkout";
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

import { getToken } from "./components/pages/MyProfile/auth/tokenAction.js";
import Login_Register from "./components/pages/MyProfile/auth/Login_Register.jsx";
import VideoDetails from "./components/pages/YouTube/VideosDetails/VideoDetails.jsx";
import YoutubeLayout from "./components/pages/YouTube/partials/YoutubeLayout.jsx";


function App() {
  const token = getToken();

  return (

    <Provider store={store}>
      <Box className="App">
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/" element={<Layout />}>
              <Route path="supercoins" element={<SuperCoins />} />
              <Route path="plus" element={<FlipkartZonePlus />} />
              <Route path="helpcentre" element={<HelpCare />} />
              <Route path="download-app" element={<DownloadApp />} />
              <Route path="communication-preferences" element={<Notifi_Preffrence />} />
              <Route path="detail-view/:prod_id" element={<DetailView />} />
              <Route path="filter-product/:prod_title" element={<FilterProduct />} />
              <Route path="the-gift-card-store/:link" element={<GiftCardStore />} />


            </Route>



            <Route path="/" element={(token != null) ? <Layout /> : <Navigate to="/account/login" />}>
              <Route path="/view-carts" element={<Cart />} />
              <Route path="order_details/:order_id" element={<OrderDetails />} />

            </Route>
            <Route path="/" element={<YoutubeLayout />}>
              <Route path="detail-video" element={<VideoDetails />} />
            </Route>

            <Route path="/account" element={<Layout />}>
              <Route path="login" element={<Login_Register />} />
            </Route>
            <Route path="/account" element={(token != null) ? <Layout /> : <Navigate to="/account/login" />}>

              <Route path="orders" element={<MyOrders />} />
              <Route path="wishlist" element={<MyWishlist />} />
              <Route index element={<ProfileInfo />} />
              <Route path="addresses" element={<ManageAddress />} />
              <Route path="pancard" element={<PanCard />} />
              <Route path="terms" element={<Terms />} />
              <Route path="vpadetails" element={<VPADetails />} />
              <Route path="cardsdetails" element={<SavedCards />} />
              <Route path="reviews" element={<MyReviews />} />
              <Route path="notification" element={<Notification />} />
              <Route path="giftcard" element={<GiftCard />} />
              <Route path="rewards" element={<MyCoupons />} />



            </Route>

          </Routes>
        </BrowserRouter>

      </Box>
    </Provider>

  );
}

export default App;

