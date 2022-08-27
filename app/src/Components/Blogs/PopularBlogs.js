import readMoreArrow from "../../assets/read-more-arrow.svg";

function PinnedBlogs({ blogs }) {
  return (
    <section id="popular" className="mt-20">
      <div className="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Blog Info --> */}
        <div className="space-y-3 text-center md:text-start">
          <h2 className="text-3xl font-bold">Pinned Blogs</h2>
        </div>

        {/* <!-- Blog Cards --> */}
        <div className="flex flex-col justify-between mt-10 space-y-10 md:grid md:grid-cols-3 md:gap-4 md:gap-y-10 md:space-y-0">
          {blogs.map((blog) => (
            <div>
              <div className="flex flex-col justify-between w-full space-y-3">
                <img
                  className="rounded-t-2xl w-full h-[200px] object-cover"
                  src={blog.thumbnail}
                  alt=""
                />

                <div className="flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primaryDark">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-dark">{blog.description}</p>
                  </div>

                  <a href={blog.url} target="_blank" rel="noreferrer">
                    <div className="flex items-center space-x-2 text-sm font-bold">
                      <span>Read More</span>
                      <img
                        className="w-[12px] h-[12px]"
                        src={readMoreArrow}
                        alt="arrow"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PinnedBlogs;
