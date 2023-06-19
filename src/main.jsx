import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Container from "./Components/Shared/Container.jsx";
import { routes } from "./Utilites/Routes/Routes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Container>
    <RouterProvider router={routes} />
    <Toaster />
  </Container>
  // </React.StrictMode>,
);
