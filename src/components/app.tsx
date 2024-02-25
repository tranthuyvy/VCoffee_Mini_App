import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";

import { getConfig } from "../utils/config";
import { ConfigProvider } from "../utils/config-provider";
import HomePage from "../pages/index";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";

const MyApp = () => {
  return (
    <RecoilRoot>
      <ConfigProvider
        cssVariables={{
          "--primary-color": getConfig((c) => c.template.primaryColor),
          "--background-color": "#f4f5f6",
        }}
      >
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/form" element={<Form></Form>}></Route>
                <Route path="/user" element={<User></User>}></Route>
              </AnimationRoutes>
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </ConfigProvider>
    </RecoilRoot>
  );
};
export default MyApp;
