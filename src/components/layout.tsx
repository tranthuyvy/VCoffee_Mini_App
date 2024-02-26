import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { Box } from "zmp-ui";
import { Navigation } from "./navigation";
import HomePage from "../pages/index";
import { ScrollRestoration } from "./scroll";
import NotificationPage from "../pages/notification";
import UserPage from "../pages/user";
import CartPage from "../pages/cart";

export const Layout: FC = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <ScrollRestoration />
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/notification" element={<NotificationPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
        </Routes>
      </Box>
      <Navigation />
    </Box>
  );
};
