import Home from "@/components/modules/admin/Home";
import Parcels from "@/components/modules/admin/Parcels";
import Payments from "@/components/modules/admin/Payments";
import type { ISidebarItem } from "@/types/types";

const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [{ title: "Home", url: "/admin/home", component: Home }],
  },
  {
    title: "Payments",
    items: [
      { title: "All Payments", url: "/admin/payments", component: Payments },
      { title: "Home", url: "/admin/home", component: Parcels },
    ],
  },
];

export default adminSidebarItems;
