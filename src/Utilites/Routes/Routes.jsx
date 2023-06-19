import MainLayouts from "../../Components/Layouts/MainLayouts";
import AddUser from "../../Components/Pages/AddUser/AddUser";
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
      {
        path: "addUser",
        element: <AddUser />,
      },
    ],
    errorElement: <p>Error!!!</p>,
  },
]);
