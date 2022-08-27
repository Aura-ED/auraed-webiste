import React from "react";
import readMoreArrow from "../../assets/read-more-arrow.svg";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../constants";

function Blogs() {
  const getBlogs = async () => {
    const res = await fetch(`${API_URL}/blogs`);
    return res.json();
  };

  const { isLoading, data, isError } = useQuery(["blogs"], getBlogs);
  if (isLoading) {
    return <h1> Loading... </h1>;
  } else if (isError) {
    return <h1> Error... </h1>;
  }

  const blogs = data.data.blogs.slice(0, 3);

  return (
    <section id="blogs" className="mt-20">
      <div className="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Blog Info --> */}
        <div className="self-center text-center space-y-3">
          <h2 className="text-3xl font-bold">Our Blogs</h2>
          <p className="text-sm font-semibold max-w-2xl text-dark">
            Take a look at what people say about US
          </p>
        </div>

        {/* <!-- Blog Cards --> */}
        <div className="flex flex-col justify-between mt-10 space-y-10 md:flex-row md:space-y-0 md:space-x-5">
          {/* <!-- Blog 1 --> */}
          {blogs.map((blog) => (
            <div className="flex flex-col justify-between w-full md:w-1/3 space-y-3">
              <img
                className="rounded-t-2xl w-full h-[200px] object-cover"
                src={blog.thumbnail}
                alt="related to "
              />

              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primaryDark">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-dark">{blog.description}</p>
                </div>

                <a href={blog.blogUrl} target="_blank" rel="noreferrer">
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
