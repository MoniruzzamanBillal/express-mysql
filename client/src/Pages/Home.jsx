import React from "react";
import BlogCard from "../Components/Home/BlogCard";
import { motion } from "framer-motion";
import GetAllBlogs from "../Hooks/GetAllBlogs";

const Home = () => {
  const { allBlogsData, allBlogsRefetch, allBlogsDataLoading } = GetAllBlogs();

  // console.log(allBlogsData);

  return (
    <div className="homeContainer py-10  ">
      <motion.div className="homeWrapper  w-[85%] m-auto ">
        {/* heading starts  */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className=" text-xl xsm:text-2xl sm:text-3xl md:text-4xl headingFont mb-8 xsm:mb-12  sm:mb-14 md:mb-16 font-bold xsm:font-semibold sm:font-medium md:font-normal "
        >
          Discover new stories and create new ideas
        </motion.h1>
        {/* heading ends  */}

        {/* blog card starts  */}
        <div className="blogCardContainer w-[100%] lg:w-[95%] xl:w-[90%] m-auto flex flex-col gap-y-[6rem]  ">
          {allBlogsData &&
            allBlogsData?.map((blog, ind) => (
              <BlogCard key={blog?.blogId} blog={blog} ind={ind} />
            ))}
        </div>
        {/* blog card ends  */}
      </motion.div>
    </div>
  );
};

export default Home;
