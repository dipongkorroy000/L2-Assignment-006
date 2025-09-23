import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getParcels: builder.query({
      query: () => ({ url: "/parcel/all-parcel", method: "GET" }),
      transformResponse: (res) => res.data,
    }),
    requestParcel: builder.mutation({
      query: (payload) => ({ url: "/parcel/create-parcel", method: "POST", data: payload }),
    }),
  }),
});

export const {
  useGetParcelsQuery,
  useRequestParcelMutation,
} = authApi;
