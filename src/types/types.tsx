import type { ComponentType } from "react";

export type { TUser, TPayment, TParcel };
export type TRole = "SUPER_ADMIN" | "ADMIN" | "SENDER" | "RECEIVER";

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

type TPayment = {
  amount: number;
  createdAt: string;
  updatedAt: string;
  invoiceUrl: string;
  parcel: string;
  status: string;
  transactionId: string;
};

type TParcel = {
  trackingId: string;
  title: string;
  type: string;
  weight: number;
  division: string;
  city: string;
  area: string;
  receiverNumber: string;
  senderEmail: string;
  status: string;
  payment: string;
  createdAt: string;
};
