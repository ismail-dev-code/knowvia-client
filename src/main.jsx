import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/router";
import { RouterProvider } from "react-router";
import AuthProvider from "./context/authContext/AuthProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="top-right" />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
