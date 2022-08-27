import React from "react";

function Apply() {
  return (
    <section id="apply" className="mt-20 px-2 md:px-0">
      <div className="p-6 md:p-12 bg-primary rounded-2xl text-center md:text-start container mx-auto flex flex-col justify-between items-center space-y-10 md:flex-row md:space-x-16 md:space-y-0">
        <h2 className="text-3xl font-bold text-white">
          Do you want to make an impact ?
        </h2>

        <a
          href="#"
          className="py-4 px-6 font-bold text-primary hover:text-white bg-white rounded-xl baseline hover:bg-primaryDark drop-shadow-md"
        >
          Join Our Team
        </a>
      </div>
    </section>
  );
}

export default Apply;
