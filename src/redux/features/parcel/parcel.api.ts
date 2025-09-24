import { baseApi } from "@/redux/baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getParcels: builder.query({
      query: (payload) => ({ url: "/parcel/all-parcel", method: "GET", params: payload }),
      transformResponse: (res) => res.data,
      providesTags: ["PARCEL"],
    }),
    requestParcel: builder.mutation({
      query: (payload) => ({ url: "/parcel/create-parcel", method: "POST", data: payload }),
      invalidatesTags: ["PARCEL"],
    }),
    getParcelsStats: builder.query({ query: () => ({ url: "/stats/parcel", method: "GET" }), providesTags: ["PARCEL"] }),
    updateParcelStatusLog: builder.mutation({
      query: ({ trackingId, payload }) => ({ url: `/parcel/${trackingId}`, method: "PATCH", data: payload }),
      invalidatesTags: ["PARCEL"],
    }),
  }),
});

export const { useGetParcelsQuery, useRequestParcelMutation, useGetParcelsStatsQuery, useUpdateParcelStatusLogMutation } = parcelApi;
