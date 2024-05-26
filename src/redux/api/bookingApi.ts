import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllRequests: build.query({
      query: () => ({
        url: "/booking/",
        method: "GET",
      }),
      providesTags: [tagTypes.request],
    }),
    addFlatRequest: build.mutation({
      query: (data) => ({
        url: `/booking/booking-request`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.request],
    }),
    updateFlatRequest: build.mutation({
      query: (args) => ({
        url: `/booking/update-request/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: [tagTypes.request],
    }),
  }),
});

export const {
  useGetAllRequestsQuery,
  useAddFlatRequestMutation,
  useUpdateFlatRequestMutation,
} = bookingApi;
