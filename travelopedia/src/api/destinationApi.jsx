import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const destinationAPI = createApi({
  reducerPath: "destinationapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  endpoints: (builder) => ({
    // Query --> GET
    // Mutation --> POST/PUT/DELETE
    getAllDestination: builder.query({
      query: () => "destination",
    }),
  }),
});

export const { useGetAllDestinationQuery } = destinationAPI;