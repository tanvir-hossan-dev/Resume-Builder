import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/resume",
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
