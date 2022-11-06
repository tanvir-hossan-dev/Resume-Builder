import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://resume-builder.herokuapp.com/",
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
