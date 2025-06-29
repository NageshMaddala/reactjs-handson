import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationApi = createApi({
  reducerPath: "destinationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  tagTypes: ["Destinations"], // Tags are used to manage cache and refetching
  // This tag will be used to invalidate the cache for Destinations
  endpoints: (builder) => ({
    // Query --> GET
    // Mutation --> POST/PUT/DELETE
    getAllDestination: builder.query({
      query: () => ({
        url: "destination",
        method: "GET",
        params: {},
      }),
      // we can create a custom transformResponse function
      transformResponse: (response) =>
        response.sort((a, b) => a.city.localeCompare(b.city)),
      // Tags are used to manage cache and refetching
      // This tag will be used to invalidate the cache for Destinations
      // when a mutation occurs (like adding, updating, or deleting a destination)
      // It helps in keeping the UI in sync with the server state
      // and ensures that the latest data is displayed
      // This is a key feature of RTK Query that helps in managing cache
      // and refetching data automatically
      providesTags: ["Destinations"],
    }),
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
      // Invalidate the cache for Destinations after adding a new one
      // Meaning of invalidate is to mark the cache as stale
      // This will trigger a refetch of the getAllDestination query
      // and update the list of destinations in the UI
      // This is important to ensure that the UI reflects the latest data
      // after a new destination is added
      // This is how RTK Query knows to refetch the data
      // after a mutation occurs
      // and the cache needs to be updated
      // This is a key feature of RTK Query that helps keep the UI in sync with
      // the server state without manual intervention
      // It automatically handles cache invalidation and refetching
      invalidatesTags: ["Destinations"],
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Destinations"],
    }),
  }),
});

export const {
  useGetAllDestinationQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationApi;
