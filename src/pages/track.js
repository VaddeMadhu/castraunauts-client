import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;
function Track({ trackId }) {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  return (
    <QueryResult error={error} loading={loading} data={data}>
      <Layout>
        <TrackDetail track={data?.track} />
      </Layout>
    </QueryResult>
  );
}

export default Track;
