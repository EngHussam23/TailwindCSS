import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "./App.css";
import Home from "./Pages/Home";
import Important from "./Pages/Important";
import Completed from "./Pages/Completed";
import Settings from "./Pages/Settings";
import Error404 from "./SystemPages/Error404";
import CommingSoon from "./SystemPages/ComingSoon";
import ToDoSection from "./Components/ToDoListComponents/ToDoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <ToDoSection />,
        errorElement: <Error404 />,
      },
      {
        path: "/Important",
        element: <Important />,
        errorElement: <Error404 />,
      },
      {
        path: "/Completed",
        element: <Completed />,
        errorElement: <Error404 />,
      },
      { path: "/Settings", element: <Settings />, errorElement: <Error404 /> },
    ],
  },
  {
    path: "/CommingSoon",
    element: <CommingSoon />,
    errorElement: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
