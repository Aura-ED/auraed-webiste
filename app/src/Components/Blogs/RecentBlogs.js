import readMoreArrow from "../../assets/read-more-arrow.svg";

function RecentBlogs({ blogs }) {
  return (
    <section id="recents" class="mt-20">
      <div class="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Blog Info --> */}
        <div class="space-y-3 text-center md:text-start">
          <h2 class="text-3xl font-bold">Recents</h2>
        </div>

        {/* <!-- Blog Cards --> */}
        <div class="flex flex-col justify-between mt-10 space-y-10 md:grid md:grid-cols-3 md:gap-4 md:gap-y-10 md:space-y-0">
          {blogs.map((blog) => (
            <div class="flex flex-col justify-between w-full space-y-3">
              <img
                class="rounded-t-2xl w-full h-[200px] object-cover"
                src={blog.thumbnail}
                alt=""
              />

              <div class="flex flex-col justify-between space-y-6">
                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-primaryDark">
                    {blog.title}
                  </h3>
                  <p class="text-sm text-dark">{blog.description}</p>
                </div>

                <a href={blog.url} target="_blank" rel="noreferrer">
                  <div class="flex items-center space-x-2 text-sm font-bold">
                    <span>Read More</span>
                    <img
                      class="w-[12px] h-[12px]"
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

export default RecentBlogs;
