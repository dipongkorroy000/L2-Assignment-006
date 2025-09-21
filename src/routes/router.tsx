import App from "@/App";
import HeroSection from "@/components/modules/home/HeroSection";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: HeroSection }],
  },
]);

export default router;
