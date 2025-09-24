import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (payload) => ({ url: "/user/all-users", method: "GET", params: payload }),
      providesTags: ["USERS"],
    }),
    deleteUsers: builder.mutation({
      query: (payload) => ({ url: "/parcel/create-parcel", method: "POST", data: payload }),
      invalidatesTags: ["USERS"],
    }),
    userRoleUpdate: builder.mutation({
      query: (payload) => ({ url: "/user/updateUserRole", method: "PATCH", data: payload }),
    }),
  }),
});

export const { useGetUsersQuery, useDeleteUsersMutation } = authApi;
