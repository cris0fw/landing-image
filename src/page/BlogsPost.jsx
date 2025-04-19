import React from "react";
import { blogs } from "../libs/article";
import CardBlogs from "../components/CardBlogs";

const BlogsPost = () => {
  return (
    <section id="blog" className="py-20 px-7">
      <h1 className="text-center font-semibold text-[33px] pb-10">
        Blogs Post
      </h1>

      <div className="max-w-5xl mx-auto gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((item) => {
          return (
            <CardBlogs
              key={item.id}
              title={item.title}
              sou={item.sou}
              image={item.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogsPost;
