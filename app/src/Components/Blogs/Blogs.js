import React from "react";
import PinnedBlogs from "./PopularBlogs";
import RecentBlogs from "./RecentBlogs";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../constants";
import SecondaryCover from "../../Layout/SecondaryCover";

function Blogs() {
  const fetchBlogs = async () => {
    const res = await fetch(`${API_URL}/blogs`);
    return res.json();
  };
  const { isLoading, isError, data } = useQuery(["blogs"], fetchBlogs);
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  const blogs = data.data.blogs;

  const pinnedBlogs = blogs.filter((blog) => blog.pinned);
  const recentBlogs = blogs.filter((blog) => !blog.pinned);

  return (
    <>
      <SecondaryCover
        title="Blogs"
        description="We are a non-profital organization focusing on child education with
            technology."
      />
      <PinnedBlogs blogs={pinnedBlogs} />
      <RecentBlogs blogs={recentBlogs} />
    </>
  );
}

export default Blogs;
