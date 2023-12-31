import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-api7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "34e64f2f3amsh6cf5348b5dfa03dp1b046djsn50cd9a7ad1e4"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({
      query: () => "/charts/get-top-songs-in_world_by_genre?genre=POP&limit=50",
    }),
  }),
});

export const { useGetTopTracksQuery } = shazamCoreApi;

// fetch(
//   "https://spotify81.p.rapidapi.com/tracks?ids=4WNcduiCmDNfmTEz7JvmLv",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
