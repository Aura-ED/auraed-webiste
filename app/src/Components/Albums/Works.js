import React, { useState } from "react";

function Works({ allAlbums }) {
  const [album, setAlbum] = useState(allAlbums[0]);
  const changeAlbum = (albumName) => {
    setAlbum(allAlbums.find((album) => album.name === albumName));
  };

  return (
    <section id="blogs" className="mt-20">
      <div className="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Album Info --> */}
        <div className="self-center text-center space-y-3">
          <h2 className="text-3xl font-bold">Glimpse Of Our Works</h2>
          <p className="text-sm max-w-2xl font-semibold text-dark">
            We are a non-profital organization focusing on child education with
            technology.
          </p>
        </div>

        {/* <!-- Filters --> */}
        <ul className="flex w-2/3 list-style-none flex-wrap self-center items-center justify-center mt-10 gap-5">
          {allAlbums.map((currAlbum, idx) => (
            <li
              className={
                "cursor-pointer " +
                (album.name === currAlbum.name
                  ? "py-2 px-6 font-bold text-white bg-primary rounded-xl baseline hover:bg-primaryDark md:block"
                  : "font-semibold text-md text-dark hover:text-primaryDark")
              }
              key={idx}
              onClick={() => changeAlbum(currAlbum.name)}
            >
              {currAlbum.name}
            </li>
          ))}
        </ul>

        {/* <!--  Cards --> */}

        <div className="flex flex-col justify-between mt-10 space-y-5 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
          {/* <!-- Album 1 --> */}
          {album.images.map((image, idx) => (
            <div key={idx}>
              <img
                className="rounded-2xl w-full h-[200px] object-cover"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
