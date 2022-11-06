import apiSlice from "../api/apiSlice";

const resumeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResumes: builder.query({
      query: () => "/",
    }),
    addResume: builder.mutation({
      query: (data) => ({
        url: "/post",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetResumesQuery, useAddResumeMutation } = resumeApi;
