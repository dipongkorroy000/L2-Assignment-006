import type { ComponentType } from "react";

export type { TUser };

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

type TUser = {
  _id: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  isActive: string;
  isVerified: boolean;
  createdAt: string;
};

export type TRole = "SUPER_ADMIN" | "ADMIN" | "SENDER" | "RECEIVER";
