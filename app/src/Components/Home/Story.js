import React from "react";

function Story() {
  return (
    <section id="story" className="mt-20">
      <div className="container flex flex-col-reverse space-y-10 mx-auto px-2 md:flex-row md:space-y-0 md:space-x-10 md:px-0">
        {/* <!-- Story Content --> */}
        <div className="flex flex-col space-y-10 items-center text-center md:w-1/2 md:text-start md:items-start">
          <div className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold">What should be done</h2>
              <h2 className="text-3xl text-primaryDark font-bold">
                And, Why we started this gambit
              </h2>
            </div>
            <p className="text-sm text-dark">
              As the bitter fact hits harshly, many children in our country
              still lack the privilege of quality education though undeniably
              education is one of the basic needs for everyone. With the hope of
              addressing and collaboratively working upon this dark problem,
              AuraED took a step to emphasize informing children about the
              future that technology holds. We try to ignite passion in the
              heart of young minds by providing knowledge related to the basic
              working processes, recent technologies, and fascinating
              capabilities of computers in the coming decades.
            </p>
          </div>

          <a
            href="#events"
            className="py-2 px-6 font-bold text-white bg-primary rounded-xl baseline hover:bg-primaryDark w-max"
          >
            View Story
          </a>
        </div>

        {/* <!-- Story Image --> */}
        <div className="w-full md:w-1/2">
          <img
            className="mb-10 w-full h-[300px] lg:h-[350] object-cover rounded-2xl md:mb-0"
            src="https://auraed.org/assets/images/about.webp"
            alt="story"
          />
        </div>
      </div>
    </section>
  );
}

export default Story;
