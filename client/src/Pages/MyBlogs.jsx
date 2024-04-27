import React, { useEffect, useState } from "react";
import { UseAuth } from "../Context/AuthContext";
import GetUserBlog from "../Hooks/GetUserBlog";
import MyBlogCard from "../Components/MyBlog/MyBlogCard";

const MyBlogs = () => {
  const { user, userLoading } = UseAuth();
  const [userId, setUserId] = useState(user?.userId || null);

  const { userBlogs, userBlogsLoading, userBlogRefetch } = GetUserBlog(userId);

  console.log(user);
  //   console.log(userBlogs);

  //   effect to set user in state
  useEffect(() => {
    if (user?.userId) {
      setUserId(user.userId);
      userBlogRefetch();
    }
  }, [user, userLoading, userBlogRefetch]);

  console.log(userBlogsLoading);

  if (userLoading || userBlogsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MyBlogsContainer">
      <div className="MyBlogsWrapper  ">
        {/* title  */}
        <h1 className=" text-4xl font-semibold text-center ">My blogs </h1>
        {/* title ends  */}

        {/* blog card starts  */}
        <div className="myBlogCard   py-6 w-[85%] xsm:w-[78%] sm:w-[95%] lg:w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 gap-x-3 gap-y-7   ">
          {userBlogs &&
            userBlogs.map((blog) => <MyBlogCard key={blog?._id} blog={blog} />)}
        </div>
        {/* blog card ends */}
      </div>
    </div>
  );
};

export default MyBlogs;
