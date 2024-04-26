import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublicUrl from "./UseAxiosPublic";

const GetAllBlogs = () => {
  const { axiosPublicUrl } = UseAxiosPublicUrl();

  const {
    data: allBlogsData,
    isLoading: allBlogsDataLoading,
    refetch: allBlogsRefetch,
  } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      const allBlogs = await axiosPublicUrl.get("/api/blog/allBlogs");

      return allBlogs?.data?.data;
    },
  });

  return { allBlogsData, allBlogsDataLoading, allBlogsRefetch };
};

export default GetAllBlogs;
