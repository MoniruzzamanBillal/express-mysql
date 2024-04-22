import React from "react";
import BlogCard from "../Components/Home/BlogCard";

const Home = () => {
  return (
    <div className="homeContainer py-10  ">
      <div className="homeWrapper  w-[85%] m-auto ">
        <div className="blogCardContainer w-[90%] m-auto  ">
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
