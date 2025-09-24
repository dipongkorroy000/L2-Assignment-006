import { baseApi } from "@/redux/baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPayments: builder.query({
      query: (payload) => ({ url: "/payment/all-payments", method: "GET", params: payload }),
      providesTags: ["PAYMENTS"],
    }),
    getPaymentsStatus: builder.query({
      query: () => ({ url: "/stats/payment", method: "GET" }),
      providesTags: ["PAYMENTS"],
    }),
    userPayments: builder.query({
      query: () => ({ url: "/payment/my-payments", method: "GET" }),
      providesTags: ["PAYMENTS"],
    }),
  }),
});

export const { useGetPaymentsQuery, useGetPaymentsStatusQuery, useUserPaymentsQuery } = paymentApi;
