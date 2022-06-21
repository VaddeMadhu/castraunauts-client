import React from "react";
import { gql, useQuery } from "@apollo/client";
import QueryResult from "../components/query-result";

import TrackCard from "../containers/track-card";
import Layout from "../components/layout";
const TRACKS = gql`
  query ExampleQuery {
    tracksForCatsHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  if (error) return `Error! ${error.message}`;
  if (loading) return "Loading...";
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForCatsHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
