import axios from "axios";

const axiosPublicUrl = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

const UseAxiosPublicUrl = () => {
  return { axiosPublicUrl };
};

export default UseAxiosPublicUrl;
