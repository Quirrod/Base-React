import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HomePage } from "./pages/HomePage.tsx";
import { LayoutPage } from "./pages/LayoutPage.tsx";
import IModel from "./models/model.ts";
import { clientService } from "./services/service.ts";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Home",
    element: <LayoutPage />,
    children: [
      {
        path: "dashboard",
        element: <HomePage />,
      },
      {
        path: "clients",
        element: <HomePage />,
        loader: async (): Promise<IModel[]> => {
          return await clientService.getClients();
        },
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
