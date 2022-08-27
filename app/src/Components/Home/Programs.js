function Programs() {
  return (
    <section id="programs" className="mt-20">
      <div className="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Program Info --> */}
        <div className="self-center text-center space-y-3">
          <h2 className="text-3xl font-bold">What We Do</h2>
          <p className="text-sm max-w-2xl font-semibold text-dark">
            We are a non-profital organization focusing on child education with
            technology.
          </p>
        </div>

        {/* <!-- Program Cards --> */}
        <div className="flex flex-col justify-between mt-10 space-y-5 md:flex-row md:space-y-0 md:space-x-5">
          {/* <!-- Program 1 --> */}
          <div className="flex flex-col justify-between w-full md:w-1/3 bg-primaryLight rounded-2xl px-4 py-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primaryDark">
                Interactive Contents
              </h3>
              <p className="text-sm">
                We are a non-profital organization focusing on child education
                with technology.
              </p>
            </div>
            <img
              className="mt-4 rounded-lg w-full h-[200px] object-cover"
              src="https://auraed.org/assets/images/events/image_08.webp"
              alt=""
            />
          </div>

          {/* <!-- Program 2 --> */}
          <div className="flex flex-col justify-between w-full md:w-1/3 bg-primaryLight rounded-2xl px-4 py-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primaryDark">
                Their dream invention
              </h3>
              <p className="text-sm">
                Children write their imaginative technological inventions which
                may sound impractical but becomes a medium to boost their
                imaginative capacity
              </p>
            </div>
            <img
              className="mt-4 rounded-lg w-full h-[200px] object-cover"
              src="https://auraed.org/assets/images/events/image_06.webp"
              alt=""
            />
          </div>

          {/* <!-- Program 3 --> */}
          <div className="flex flex-col justify-between w-full md:w-1/3 bg-primaryLight rounded-2xl px-4 py-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primaryDark">
                Embark a spark in Children
              </h3>
              <p className="text-sm">
                We help young minds unscramble the beautiful world of technology
                and realize their interest and their potential.
              </p>
            </div>
            <img
              className="mt-4 justify-end rounded-lg w-full h-[200px] object-cover"
              src="https://auraed.org/assets/images/events/image_04.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
