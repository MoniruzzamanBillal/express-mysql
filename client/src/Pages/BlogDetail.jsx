import React, { useEffect, useState } from "react";

import GetSingleBlog from "../Hooks/GetSingleBlog";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const detailVarient = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const BlogDetail = () => {
  const { id } = useParams();

  const { blogData, blogDataLoading, blogDataRefetch } = GetSingleBlog(id);

  console.log(blogData);

  return (
    <div className="detailContainer pt-[4.4rem] ">
      <motion.div
        key={blogData?.blogId}
        className="detailWrapper  w-[98%] xsm:w-[95%] sm:w-[92%]  m-auto "
      >
        {/* detail top section  */}
        <div className="detailTop   flex flex-col md:flex-row gap-9 md:gap-0 justify-evenly items-center mb-6 sm:mb-7 md:mb-10 xmd:mb-12 lg:mb-16 ">
          {/* detail left starts  */}
          <motion.div
            variants={detailVarient}
            initial="hidden"
            whileInView={"animate"}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="detailLeft  w-[94%] xsm:w-[90%] sm:w-[85%] md:w-[55%]  "
          >
            {/* left heading  */}

            <h1 className="  font-bold text-xl xsm:text-2xl sm:text-3xl xmd:text-4xl headingFont mb-5 leading-relaxed  ">
              {blogData?.title}
            </h1>

            {/* left heading  */}

            {/* writer info starts  */}
            <div className="writerInfo  flex items-center gap-2  ">
              {/* writer image  */}
              <div className="writerImg   ">
                <img
                  class=" w-10 h-10 xsm:w-11 xsm:h-11 sm:w-12 sm:h-12 rounded-full"
                  src={
                    blogData?.writerImg
                      ? blogData?.writerImg
                      : "https://i.ibb.co/B2XybXN/ABU-UBAIDAH-750x430-1.jpg"
                  }
                  alt="Rounded avatar "
                />
              </div>
              {/* writer image  */}

              {/* writer name  */}

              <div className="writerName   ">
                <p className=" text-gray-800 font-medium text-sm sm:text-base ">
                  {blogData?.writer}
                </p>
                <p className=" text-gray-700 font-medium text-xs xsm:text-sm sm:text-base ">
                  {blogData?.creationDate}
                </p>
              </div>

              {/* writer name  */}
            </div>
            {/* writer info ends */}

            {/* edit section starts  */}

            {/* {user?.displayName === blogData[0]?.writer ? (
                <div className="editContainer mt-7  ">
                  <Link
                    to={`/edit/${blogData[0]?._id}`}
                    className=" bg-red-500 text-gray-50 hover:bg-red-600 hover:text-gray-100 hover:scale-105 active:scale-100 hover:shadow-lg py-2 px-5 rounded transition-all duration-200 font-medium  navLinkFont "
                  >
                    Edit post
                  </Link>
                </div>
              ) : (
                ""
              )} */}

            <div className="editContainer mt-7  ">
              <Link
                to={`/edit/${blogData?.blogId}`}
                className=" bg-red-500 text-gray-50 hover:bg-red-600 hover:text-gray-100 hover:scale-105 active:scale-100 hover:shadow-lg py-2 px-5 rounded transition-all duration-200 font-medium  navLinkFont "
              >
                Edit post
              </Link>
            </div>

            {/* edit section ends */}

            {/*  */}
          </motion.div>
          {/* detail left ends */}

          {/* detail right  */}
          <motion.div
            variants={detailVarient}
            initial="hidden"
            whileInView={"animate"}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="detailRight  w-[92%] xsm:w-[85%] sm:w-[72%] md:w-[41%] "
          >
            {/* right image  */}
            <div className="rightImg  h-[18rem] sm:h-[19rem]  md:h-[15rem] xmd:h-[16rem] lg:h-[18rem] rounded-md overflow-auto ">
              <img
                src={blogData?.titleImg}
                className=" w-full h-full   bgImage "
                alt=""
              />
            </div>
            {/* right image  */}
          </motion.div>
          {/* detail right  */}
        </div>
        {/* detail top section  ends */}

        {/* detail paragraph starts  */}

        {/* detail paragraph container  */}

        <div className="detailCOntainer  flex justify-between   ">
          <div className="detailParagraphContainer w-[97%] xsm:w-[94%] sm:w-[90%] xmd:w-[68%] paragraphFont text-sm xsm:text-base sm:text-lg m-auto    ">
            {/* detail paragraph  */}
            <motion.div
              variants={detailVarient}
              initial="hidden"
              whileInView={"animate"}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="detailParagraph   "
              dangerouslySetInnerHTML={{ __html: blogData?.description }}
            ></motion.div>
            {/* detail paragraph ends */}

            {/* comment section starts  */}
            {/* <div className="commentSection mt-14  ">
                <Comment id={id} />
              </div> */}
            {/* comment section ends */}

            {/*  */}
          </div>
        </div>

        {/* detail paragraph container  */}

        {/* detail paragraph ends */}

        {/*  */}
      </motion.div>
    </div>
  );
};

export default BlogDetail;
