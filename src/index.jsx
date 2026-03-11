import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./route/route";
import { AppProvider } from "./context/AppContext";

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(
  <AppProvider>
    <RouterProvider router={Route} />
  </AppProvider>,
);
