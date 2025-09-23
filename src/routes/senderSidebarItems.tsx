import Home from "@/components/modules/sender/Home";
import MyParcels from "@/components/modules/sender/MyParcels";
import type { ISidebarItem } from "@/types/types";

const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [{ title: "Home", url: "/sender/home", component: Home }],
  },
  {
    title: "Parcels",
    items: [{ title: "Parcels", url: "/sender/add-tour-type", component: MyParcels }],
  },
];

export default senderSidebarItems;
