import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/router";
import { RouterProvider } from "react-router";
import AuthProvider from "./context/authContext/AuthProvider";
import { ToastContainer } from "react-toastify";
import { Tooltip } from "react-tooltip";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="top-right" />
    <Tooltip id="my-tooltip" />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
