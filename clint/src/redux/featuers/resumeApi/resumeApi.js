import apiSlice from "../api/apiSlice";

const resumeApi = apiSlice.injectEndpoints({
  tagsTypes: ["resumes"],
  endpoints: (builder) => ({
    getResumes: builder.query({
      query: () => "/",
      providesTags: ["resumes"],
    }),

    addResume: builder.mutation({
      query: (data) => ({
        url: "/post",
        method: "POST",
        body: data,
        invalidatesTags: ["resumes"],
      }),
    }),
    updateResume: builder.mutation({
      query: ({ data, id }) => ({
        url: `/resumeupdate/${id}`,
        method: "PUT",
        body: data,
        invalidatesTags: ["resumes"],
      }),
    }),
    deleteResume: builder.mutation({
      query: (id) => ({
        url: `/resumedelete/${id}`,
        method: "DELETE",
        invalidatesTags: ["resumes"],
      }),
    }),
  }),
});

export const { useGetResumesQuery, useAddResumeMutation, useUpdateResumeMutation, useDeleteResumeMutation } = resumeApi;
