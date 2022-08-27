import React from "react";
import calenderSvg from "../../assets/calender.svg";
import linkSvg from "../../assets/link.svg";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../constants";

function Events() {
  const getEvents = async () => {
    const res = await fetch(`${API_URL}/events`);
    return res.json();
  };

  const { isLoading, data, isError } = useQuery(["events"], getEvents);
  if (isLoading) return <h1> Loading... </h1>;
  else if (isError) return <h1> Error... </h1>;

  const events = data.data.events.slice(0, 4);

  return (
    <section id="events" className="mt-20">
      <div className="container mx-auto flex flex-col items-center space-y-10 md:flex-row md:space-x-16 md:space-y-0 md:px-0">
        {/* <!-- Event Info --> */}
        <div className="flex flex-col space-y-10 items-center text-center md:w-1/2 lg:w-1/3 md:text-start md:items-start">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <p className="text-sm text-dark">
              We're proud to say that Project AuraEd has successfully reached
              five schools and taught over a thousand students from different
              districts of Nepal.
            </p>
          </div>
          <a
            href="#events"
            className="py-2 px-6 font-bold text-white bg-primary rounded-xl baseline hover:bg-primaryDark w-max"
          >
            View All
          </a>
        </div>

        {/* <!-- Event Cards --> */}
        <div className="flex w-full flex-col gap-5 md:w-1/2 lg:w-2/3 md:grid md:self-start lg:grid-cols-2">
          {/* <!-- Event 1 --> */}
          {events.map((event, idx) => (
            <div
              className="h-min-0 bg-primaryLight rounded-2xl px-4 py-4"
              key={idx}
            >
              <div className="flex justify-between">
                <h4 className="text-xl text-primaryDark font-bold">
                  {event.title}
                </h4>
                <img
                  className="hidden w-[20px] h-[20px] cursor-pointer"
                  src={linkSvg}
                  alt="link"
                />
              </div>

              <p className="mt-1 text-md font-semibold">{event.location}</p>

              <div className="flex mt-4 justify-start items-center space-x-2 text-sm text-dark font-semibold">
                <img
                  className="w-[14px] h-[14px]"
                  src={calenderSvg}
                  alt="calender"
                />
                <span>
                  {new Date(event.startDate).toLocaleDateString()} -{" "}
                  {new Date(event.endDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
