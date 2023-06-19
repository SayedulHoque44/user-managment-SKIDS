import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Container from "./Components/Shared/Container.jsx";
import { routes } from "./Utilites/Routes/Routes.jsx";
import "./index.css";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Container>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <Toaster />
    </QueryClientProvider>
  </Container>
  // </React.StrictMode>,
);
