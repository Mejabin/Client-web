import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/home/Home";
import Corner from "@/components/corner/Corner";
import { Gallary } from "@/components/gallary/Gallary";
import { BranchBoy } from "@/components/branchBoyGirl/BranchBoy";
import { Dress } from "@/components/bibidh/Dress";
import { ShortProcpectas } from "@/components/bibidh/ShortProcpectas";
import { LongProcpectas } from "@/components/bibidh/LongProcpectas";

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
      {
        path: "/gallary",
        element: <Gallary />,
      },
      {
        path: "/Branch",
        element: <BranchBoy />,
      },
      
      {
        path : "/dress",
        element :<Dress/>
      },
      {
        path: "Short",
        element: <ShortProcpectas />,

      },
      {
        path: "long",
        element: <LongProcpectas />,

      },
    ],
  },
]);

export default router;
