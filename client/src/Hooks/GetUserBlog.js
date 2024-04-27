import { useQuery } from "@tanstack/react-query";
import UseAxiosPublicUrl from "./UseAxiosPublic";

const GetUserBlog = (id) => {
  const { axiosPublicUrl } = UseAxiosPublicUrl();

  const {
    data: userBlogs,
    isLoading: userBlogsLoading,
    refetch: userBlogRefetch,
  } = useQuery({
    queryKey: ["userBlogs", "allUserBlog"],
    queryFn: async () => {
      const res = await axiosPublicUrl.get(`/api/blog/user/${id}`);

      return res?.data?.data;
    },
  });

  return { userBlogs, userBlogsLoading, userBlogRefetch };
};

export default GetUserBlog;
