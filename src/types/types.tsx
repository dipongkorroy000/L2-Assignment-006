import type { ComponentType } from "react";

export interface ILogin {
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "SENDER" | "RECEIVER";
