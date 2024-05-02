import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/home/Home";
import Corner from "@/components/corner/Corner";
import { Gallary } from "@/components/gallary/Gallary";
import { BranchBoy } from "@/components/branchBoyGirl/BranchBoy";
import { Dress } from "@/components/bibidh/Dress";
import { ShortProcpectas } from "@/components/bibidh/ShortProcpectas";
import { LongProcpectas } from "@/components/bibidh/LongProcpectas";
import { FeesCollection } from "@/components/bibidh/FeesCollection";
import Food from "@/components/bibidh/Food";
import Contact from "@/components/contact/Contact";
import InstituteInfo from "@/components/instituteInfo/InstituteInfo";
import Aphorism from "@/components/aphorism/Aphorism";

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
        path: "/dress",
        element: <Dress />,
      },
      {
        path: "Short",
        element: <ShortProcpectas />,
      },
      {
        path: "long",
        element: <LongProcpectas />,
      },
      {
        path: "fees",
        element: <FeesCollection />,
      },
      {
        path: "food",
        element: <Food />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "info",
        element: <InstituteInfo />,
      },
      {
        path: "aphorism",
        element: <Aphorism />,
      },
    ],
  },
]);

export default router;
