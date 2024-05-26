import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/user/",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    changeStatus: build.mutation({
      query: (args) => ({
        url: `/user/status/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    changeRole: build.mutation({
      query: (args) => ({
        url: `/user/role/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useChangeRoleMutation,
  useChangeStatusMutation,
} = userApi;
