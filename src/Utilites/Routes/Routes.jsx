import MainLayouts from "../../Components/Layouts/MainLayouts";
import Home from "../../Components/Pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: <p>Error!!!</p>,
  },
]);
