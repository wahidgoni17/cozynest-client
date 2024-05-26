import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";
import { getFromLocalStorage } from "@/utils/local-storage";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://cozynest-server.vercel.app/api",
  prepareHeaders: (headers) => {
    const token = getFromLocalStorage("accessToken");
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
