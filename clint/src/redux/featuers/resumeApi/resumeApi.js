import apiSlice from "../api/apiSlice";

const resumeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResumes: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetResumesQuery } = resumeApi;
