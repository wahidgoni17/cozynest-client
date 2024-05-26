import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const profileAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => {
        return {
          url: "/profile/me",
          method: "GET",
        };
      },
      providesTags: [tagTypes.profile],
    }),
    getMyFlatPosts: build.query({
      query: () => {
        return {
          url: "/profile/flat-posts",
          method: "GET",
        };
      },
      providesTags: [tagTypes.profile],
    }),
    getMyFlatRequest: build.query({
      query: () => {
        return {
          url: "/profile/flat-bookings",
          method: "GET",
        };
      },
      providesTags: [tagTypes.profile],
    }),
    updateMyProfile: build.mutation({
      query: (data) => {
        return {
          url: "/profile/update-profile",
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [tagTypes.profile],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useGetMyFlatPostsQuery,
  useGetMyFlatRequestQuery,
  useUpdateMyProfileMutation,
} = profileAPi;
