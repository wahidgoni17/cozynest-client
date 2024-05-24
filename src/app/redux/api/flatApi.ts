import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const flatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    AddFlat: build.mutation({
      query: (data) => ({
        url: "/flats/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    updateAFlat: build.mutation({
      query: (args) => ({
        url: `/flats/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    getAllFlats: build.query({
      query: () => ({
        url: "/flats/",
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),
    deleteAFlat: build.mutation({
      query: (id) => ({
        url: `/flats/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flat],
    }),
  }),
});

export const {
  useAddFlatMutation,
  useGetAllFlatsQuery,
  useUpdateAFlatMutation,
  useDeleteAFlatMutation,
} = flatApi;
