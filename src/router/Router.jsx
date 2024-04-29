import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/home/Home";
import Corner from "@/components/corner/Corner";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      {
        path: "/Corner",
        element: <Corner />,
      },
    ],
  },
]);

export default router;
