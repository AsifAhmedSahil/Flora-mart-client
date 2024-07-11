// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes:['Products'],
  endpoints: (builder) => ({


    getAllProducts: builder.query({
      query: () => {
        return {
          // query: () => ({
          // url: `/tasks?priority=${priority}`,
          url: `/products`,
          method: "GET",
        };
      },
      providesTags:['Products']
    }),


    addProducts: builder.mutation({
      query: (product) => {
        return {
          // query: () => ({
          // url: `/tasks?priority=${priority}`,
          url: `/products`,
          method: "POST",
          body:product
        };
      },
      invalidatesTags:['Products']
    }),


    getSingleProducts: builder.query({
      query: (id) => {
        return {
          // query: () => ({
          // url: `/tasks?priority=${priority}`,
          url: `/products/${id}`,
          method: "GET",
        };
      },
    }),


    updateProducts: builder.mutation({
      query: ({id,...updatedProduct}) => {
        return {
          // query: () => ({
          // url: `/tasks?priority=${priority}`,
          url: `/products/${id}`,
          method: "PATCH",
          body:updatedProduct
        };
      },
      invalidatesTags:['Products']
    }),





    deleteSingleProducts: builder.mutation({
      query: (id) => {
        return {
          // query: () => ({
          // url: `/tasks?priority=${priority}`,
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags:['Products']
    }),
  }),
});

export const {useGetAllProductsQuery,useGetSingleProductsQuery,useAddProductsMutation,useUpdateProductsMutation,useDeleteSingleProductsMutation} = baseApi

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const {  } = baseApi
