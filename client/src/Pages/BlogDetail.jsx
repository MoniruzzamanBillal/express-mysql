import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

import GetSingleBlog from "../Hooks/GetSingleBlog";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UseAuth } from "../Context/AuthContext";
import UseAxiosPublicUrl from "../Hooks/UseAxiosPublic";
import Comment from "../Components/shared/Comment";
import { blogDeleteSuccessfully } from "../Utils/ToastFunctions";

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

// delete modal starts
const DeleteModal = ({ id, setDeleteModal }) => {
  const { axiosPublicUrl } = UseAxiosPublicUrl();
  const navigate = useNavigate();

  const handleDeleteBlog = (id) => {
    // console.log("blog id = ", id);
    setDeleteModal(false);

    axiosPublicUrl
      .delete(`/api/blog/delete/${id}`)
      .then((result) => {
        console.log(result?.data);

        if (result?.data) {
          blogDeleteSuccessfully();
          setTimeout(() => {
            navigate("/myblog");
          }, 1200);
        }
      })
      .catch((error) => {
        console.log("error ");
        console.log(error);
      });
  };

  return (
    <div className="modalContainer bg-sky-300 rounded-md shadow-lg relative  ">
      <div className="modalWrapper py-6 px-10 flex flex-col justify-center items-center gap-y-8 ">
        <h1 className=" text-4xl font-semibold ">Are you want to delete ? </h1>
        <h1 className=" text-2xl font-semibold ">
          Once you delete a blog , you can't undo it !!
        </h1>
        <button
          onClick={() => handleDeleteBlog(id)}
          className="bg-red-500 text-gray-50 hover:bg-red-600 hover:text-gray-100 hover:scale-105 active:scale-100 hover:shadow-lg py-2 px-5 rounded transition-all duration-200 font-medium  navLinkFont"
        >
          Delete{" "}
        </button>
      </div>

      <div
        className="crossIcon absolute top-0 right-0 text-2xl font-bold text-red-700 cursor-pointer "
        onClick={() => setDeleteModal(false)}
      >
        <RxCross1 />
      </div>
    </div>
  );
};
// delete modal ends

const BlogDetail = () => {
  const { id } = useParams();
  const { user, userLoading } = UseAuth();

  const [deleteModal, setDeleteModal] = useState(false);

  const { blogData, blogDataLoading, blogDataRefetch } = GetSingleBlog(id);

  //! function for deleting a blog
  const handleDeleteModal = () => {
    setDeleteModal(true);
  };

  // console.log(blogData);
  // console.log(user);

  return (
    <div className="detailContainer pt-[4.4rem] relative   ">
      {/*  */}
      <motion.div
        className={` ${
          deleteModal ? "blur-md" : ""
        } detailWrapper  w-[98%] xsm:w-[95%] sm:w-[92%]  m-auto  min-h-screen    `}
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
                  className=" w-10 h-10 xsm:w-11 xsm:h-11 sm:w-12 sm:h-12 rounded-full"
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

            {blogData?.uid === user?.userId ? (
              <div className="editContainer mt-9 flex  items-center gap-x-4  ">
                <Link
                  to={`/edit/${blogData?.blogId}`}
                  className=" bg-green-500 text-gray-50 hover:bg-green-600 hover:text-gray-100 hover:scale-105 active:scale-100 hover:shadow-lg py-2 px-5 rounded transition-all duration-200 font-medium  navLinkFont "
                >
                  Edit post
                </Link>
                <button
                  onClick={() => handleDeleteModal()}
                  className="bg-red-500 text-gray-50 hover:bg-red-600 hover:text-gray-100 hover:scale-105 active:scale-100 hover:shadow-lg py-2 px-5 rounded transition-all duration-200 font-medium  navLinkFont"
                >
                  Delete{" "}
                </button>
              </div>
            ) : (
              ""
            )}

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

        <div className="detailCOntainer  flex justify-between  mb-6   ">
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

        {/* detail paragraph ends */}

        {/*  */}
      </motion.div>
      {/* delete modal starts  */}
      {deleteModal && (
        <div className="deleteModal   absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  ">
          <DeleteModal id={blogData?.blogId} setDeleteModal={setDeleteModal} />
        </div>
      )}
      {/* delete modal ends  */}
    </div>
  );
};

export default BlogDetail;
