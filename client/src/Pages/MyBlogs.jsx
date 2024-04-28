import { useEffect, useState } from "react";
import { UseAuth } from "../Context/AuthContext";
import GetUserBlog from "../Hooks/GetUserBlog";
import MyBlogCard from "../Components/MyBlog/MyBlogCard";

const MyBlogs = () => {
  const { user, userLoading } = UseAuth();
  const [userId, setUserId] = useState(user?.userId || null);

  const { userBlogs, userBlogsLoading, userBlogRefetch } = GetUserBlog(userId);

  //! effect to set user in state
  useEffect(() => {
    if (user?.userId) {
      setUserId(user.userId);
      userBlogRefetch();
    }
  }, [user, userLoading, userBlogRefetch]);

  // console.log(userBlogs?.length);

  if (userLoading || userBlogsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MyBlogsContainer  py-3 ">
      <div className="MyBlogsWrapper  min-h-screen  ">
        {/* title  */}
        <h1 className=" text-4xl font-semibold text-center  ">My blogs </h1>
        {/* title ends  */}

        {/* blog card starts  */}
        {userBlogs && userBlogs?.length < 1 ? (
          <div className=" h-screen flex justify-center items-center  text-4xl font-bold ">
            <h1> No Blogs Created</h1>
          </div>
        ) : (
          <div className="myBlogCard   py-6 w-[85%] xsm:w-[78%] sm:w-[95%] lg:w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 gap-x-6 gap-y-14   ">
            {userBlogs &&
              userBlogs.map((blog) => (
                <MyBlogCard key={blog?._id} blog={blog} />
              ))}
          </div>
        )}

        {/* blog card ends */}
      </div>
    </div>
  );
};

export default MyBlogs;
