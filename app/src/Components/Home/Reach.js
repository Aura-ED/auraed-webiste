import React from "react";
import placesSvg from "../../assets/places.svg";
import childrenSvg from "../../assets/children.svg";
import eventsSvg from "../../assets/events.svg";

function Reach() {
  return (
    <section id="reach" className="mt-20 px-2 md:px-0">
      <div className="p-6 md:p-12 bg-primary rounded-2xl container mx-auto flex flex-col just items-center space-y-10 md:flex-row md:space-x-16 md:space-y-0">
        {/* <!-- Reach Info --> */}
        <div className="text-center md:w-1/3 md:text-start md:items-start space-y-3">
          <h2 className="text-3xl font-bold text-white">Our Reach</h2>
          <p className="text-sm text-white">
            We're proud to say that Project AuraEd has successfully reached five
            schools and taught over a thousand students from different districts
            of Nepal.
          </p>
        </div>

        {/* <!-- React Catalog --> */}
        <div className="flex items-between space-y-10 flex-col w-full md:flex-row md:items-start md:w-2/3 md:space-y-0 justify-between md:space-x-10">
          {/* <!-- Reach 1 --> */}
          <div className="md:w-1/3 items-center text-center space-y-3 md:space-y-5">
            <h2 className="text-5xl font-bold text-white">25+</h2>
            <div className="flex items-center justify-center space-x-3">
              <img className="w-[30px] h-[30px]" src={placesSvg} alt="places" />
              <h4 className="text-xl text-white">Places</h4>
            </div>
          </div>

          {/* <!-- Reach 2 --> */}
          <div className="md:w-1/3 items-center text-center space-y-3 md:space-y-5">
            <h2 className="text-5xl font-bold text-white">5k+</h2>
            <div className="flex items-center justify-center space-x-3">
              <img
                className="w-[30px] h-[30px]"
                src={childrenSvg}
                alt="places"
              />
              <h4 className="text-xl text-white">Children</h4>
            </div>
          </div>

          {/* <!-- Reach 3 --> */}
          <div className="md:w-1/3 items-center text-center space-y-3 md:space-y-5">
            <h2 className="text-5xl font-bold text-white">25+</h2>
            <div className="flex items-center justify-center space-x-3">
              <img className="w-[30px] h-[30px]" src={eventsSvg} alt="places" />
              <h4 className="text-xl text-white">Events</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reach;
