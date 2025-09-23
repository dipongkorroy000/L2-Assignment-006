import Home from "@/components/modules/receiver/Home";
import MyParcels from "@/components/modules/receiver/MyParcels";
import type { ISidebarItem } from "@/types/types";

const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [{ title: "Analytics", url: "/receiver/home", component: Home }],
  },
  {
    title: "Parcels",
    items: [{ title: "Add Tour Type", url: "/receiver/parcels", component: MyParcels }],
  },
];

export default receiverSidebarItems;
