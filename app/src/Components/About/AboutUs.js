import storyImage from '../../assets/images/events/image_15.jpeg';
function AboutUs() {
  return (
    <section id="story" className="mt-20">
      <div className="container flex flex-col space-y-10 mx-auto px-2 md:flex-row md:space-y-0 md:space-x-10 md:px-0">
        {/* <!-- Story Image --> */}
        <div className="w-full md:w-1/2">
          <img
            className="mb-10 w-full h-[300px] lg:h-[350] object-cover rounded-2xl md:mb-0"
            src={storyImage}
            alt="story"
          />
        </div>
        {/* <!-- Story Content --> */}
        <div className="flex flex-col space-y-10 items-center text-center md:w-1/2 md:text-start md:items-start">
          <div className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold">
                The social value we deliver
              </h2>
              <h2 className="text-3xl text-primaryDark font-bold">
                Impacting by doing
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
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
