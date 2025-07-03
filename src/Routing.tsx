import Libraries from "./pages/Libraries.tsx";
import Library from "./pages/Library.tsx";
import { createHashRouter, redirect } from "react-router-dom";
import PageLayout from "./components/PageLayout.tsx";

const router = createHashRouter([
  {
    path: "/",
    loader: () => redirect("/libraries"),
  },
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/libraries",
        element: <Libraries />,
      },
      {
        path: "/library/:name",
        element: <Library />,
      },
    ],
  },
]);

export default router;
