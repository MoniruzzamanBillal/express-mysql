import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublicUrl from "./UseAxiosPublic";

const GetSingleBlog = (id) => {
  const { axiosPublicUrl } = UseAxiosPublicUrl();

  const {
    data: blogData,
    isLoading: blogDataLoading,
    refetch: blogDataRefetch,
  } = useQuery({
    queryKey: ["blog", "singleBlog"],
    queryFn: async () => {
      const response = await axiosPublicUrl.get(`/api/blog/${id}`);

      return response?.data?.data[0];
    },
  });
  return { blogData, blogDataLoading, blogDataRefetch };
};

export default GetSingleBlog;
