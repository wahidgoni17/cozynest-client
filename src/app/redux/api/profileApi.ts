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

export const { useGetMyProfileQuery, useUpdateMyProfileMutation } = profileAPi;
