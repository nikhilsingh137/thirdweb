import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Topbar from "./common-component/Topbar";
import Header from "./common-component/Header";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Topbar />
      <Header />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
