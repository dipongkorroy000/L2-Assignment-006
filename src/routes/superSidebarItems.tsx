import Home from "@/components/modules/superAdmin/Home";
import Parcels from "@/components/modules/superAdmin/Parcels";
import ParcelStats from "@/components/modules/superAdmin/ParcelStats";
import Payments from "@/components/modules/superAdmin/Payments";
import Users from "@/components/modules/superAdmin/Users";
import UserStats from "@/components/modules/superAdmin/UserStats";
import type { ISidebarItem } from "@/types/types";

const superSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [{ title: "Home", url: "/super-admin/home", component: Home }],
  },
  {
    title: "SuperAdmin",
    items: [
      { title: "Parcels", url: "/super-admin/parcels", component: Parcels },
      { title: "Users", url: "/super-admin/users", component: Users },
      { title: "Payments", url: "/super-admin/payments", component: Payments },
      { title: "UserStats", url: "/super-admin/UserStats", component: UserStats },
      { title: "ParcelStats", url: "/super-admin/parcelStats", component: ParcelStats },
    ],
  },
];

export default superSidebarItems;
