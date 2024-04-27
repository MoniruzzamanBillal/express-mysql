import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { UseAuth } from "../../Context/AuthContext";

const NavBar = () => {
  const { user, userLoading, setUser } = UseAuth();
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isUserMenuActive, setIsUserMenuActive] = useState(false);

  // console.log(user);

  // function for logout a user
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <div className="navContainer fixed w-full  backdrop-blur z-[10] ">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.1 }}
        className=" navWrapper w-[97%] xsm:w-[94%] sm:w-[92%] m-auto   bg-blue-100 flex justify-between items-center self-center drop-shadow-md  backdrop-blur px-5 py-3 rounded-b-md "
      >
        {/* nav left  */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="navLeft text-xl sm:text-2xl flex justify-evenly gap-1 sm:gap-2 "
        >
          <FaLinkedin className=" cursor-pointer hover:text-blue-800 " />
          <FaGithubSquare className=" cursor-pointer hover:text-gray-700 " />
          <FaFacebookSquare className=" cursor-pointer hover:text-blue-900  " />
        </motion.div>
        {/* nav left  */}

        {/* nav middle  */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="navMid  "
        >
          <Link to="/">
            <h1 className="  text-xl sm:text-2xl logoFont ">MonirBlog</h1>
          </Link>
        </motion.div>
        {/* nav middle  */}

        {/* nav right  */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className=" navRight navLinkFont text-xl hidden sm:flex justify-between items-center gap-3  "
        >
          {/* avatar starts  */}

          {user && (
            <div className="userItems relative ">
              <div
                className="  abatar cursor-pointer  flex justify-between items-center self-center gap-1.5 "
                onClick={() => setIsUserMenuActive(!isUserMenuActive)}
              >
                <p className=" text-sm "> {user?.userName} </p>
                <img
                  className="w-8 h-8 p-.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={user?.userImg}
                  alt="Bordered avatar"
                />
              </div>
              {/*  */}
              {/* user nav  */}
              <div
                className={` userNav ${
                  isUserMenuActive ? "flex" : "hidden"
                }  bg-gray-600 flex  absolute top-[2.2rem] left-[0rem]  px-6 py-2 shadow-md  flex-col gap-2 text-gray-100 rounded  `}
              >
                <Link
                  to={"/createPost"}
                  onClick={() => setIsUserMenuActive(!isUserMenuActive)}
                >
                  Create
                </Link>
                <Link
                  to={"/myblog"}
                  onClick={() => setIsUserMenuActive(!isUserMenuActive)}
                >
                  My blogs
                </Link>
              </div>
              {/* user nav ends  */}
            </div>
          )}

          {/* avatar ends  */}

          {/* login button  */}
          <div className="loginButton font-semibold  ">
            {user && user ? (
              <button onClick={() => handleLogout()}>Log out</button>
            ) : (
              <Link to="/login">
                <button className="  ">Login</button>
              </Link>
            )}
          </div>
          {/* login button  */}
        </motion.div>

        {/* mobile menu  */}

        <div className="mobileMenu   block sm:hidden relative ">
          {/* hamburger menu */}
          {/* hamburger menu */}
          <div
            onClick={() => setIsSidebarActive(!isSidebarActive)}
            className="fixed top-0 right-2 h-[2.5rem]  sm:hidden flex flex-col justify-center gap-1  p-1.5 rounded cursor-pointer z-[20] "
          >
            <div
              className={`line duration-300 h-[3px] w-[25px] bg-gray-600 rounded ${
                isSidebarActive ? "-rotate-45 translate-y-[7px]" : ""
              }`}
            ></div>
            <div
              className={`line duration-300 h-[3px] w-[25px] bg-gray-600 rounded ${
                isSidebarActive ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`line duration-300 h-[3px] w-[25px] bg-gray-600 rounded ${
                isSidebarActive ? "rotate-45 translate-y-[-7px]" : ""
              }`}
            ></div>
          </div>
          {/* hamburger emnu ends  */}
          {/* hamburger emnu ends  */}

          {/* mobile menu starts  */}
          <motion.div
            className={` ${
              isSidebarActive ? "flex" : "hidden"
            }  mobileMenu bg-gray-600 absolute top-[1rem] right-0  px-5 py-2.5 shadow-sm  flex-col gap-y-3 text-gray-100  items-center justify-center w-[9rem]  `}
          >
            {/* creatye button  */}
            <div className="createBtn ">
              <Link>Create</Link>
            </div>

            <div className="myBlogs  ">
              <Link
                to={"/myblog"}
                onClick={() => setIsUserMenuActive(!isUserMenuActive)}
              >
                My blogs
              </Link>
            </div>

            {/* creatye button  */}

            {/* login button  */}
            <div className="loginButton  ">
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
            {/* login button  */}
          </motion.div>
          {/* mobile menu ends  */}
        </div>

        {/* mobile menu  */}

        {/* nav right  */}
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default NavBar;
