import React from "react";
import { App, ZMPRouter, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";

import { getConfig } from "../utils/config";
import { ConfigProvider } from "../utils/config-provider";
import { Layout } from "./layout";

const MyApp = () => {
  return (
    <RecoilRoot>
      <ConfigProvider
        cssVariables={{
          "--primary-color": getConfig((c) => c.template.primaryColor),
          "--background-color": "#f8f8f8",
        }}
      >
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              {/* <AnimationRoutes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/form" element={<Form></Form>}></Route>
                <Route path="/user" element={<User></User>}></Route>
              </AnimationRoutes> */}
              <Layout />
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </ConfigProvider>
    </RecoilRoot>
  );
};
export default MyApp;
