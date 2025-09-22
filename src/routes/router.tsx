import App from "@/App";
import HeroSection from "@/components/modules/home/HeroSection";
import Login from "@/pages/Login";
import Profile from "@/pages/profile/Profile";
import Register from "@/pages/Register";
import Verification from "@/pages/Verification";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HeroSection },
      { path: "/profile", Component: Profile },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verification",
    Component: Verification,
  },
]);

export default router;
