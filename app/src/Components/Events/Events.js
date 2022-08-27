import React from "react";
import SecondaryCover from "../../Layout/SecondaryCover";
import UpcomingEvents from "./UpcomingEvents";
import { API_URL } from "../../constants";
import { useQuery } from "@tanstack/react-query";

function Events() {
  const getAllEvents = async () => {
    const res = await fetch(`${API_URL}/events`);
    return res.json();
  };
  const { data, isLoading, isError } = useQuery(["events"], getAllEvents);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const events = data.data.events;

  return (
    <>
      <SecondaryCover
        title="Events"
        description="We are a non-profital organization focusing on child education with technology."
      />
      <UpcomingEvents events={events} />
    </>
  );
}

export default Events;
