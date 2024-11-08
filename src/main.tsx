import { StrictMode } from "react";
// eslint-disable-next-line import/order
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ParkingMap } from "@/features/parking-map/components/parking-map/parking-map.tsx";
import { ContentOverlay } from "@/features/content-overlay/components/content-overlay.tsx";

import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":areaId",
        element: <ContentOverlay />,
        children: [
          {
            path: ":floorId",
            element: <ParkingMap />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
