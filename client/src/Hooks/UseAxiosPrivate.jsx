import axios from "axios";
let token = localStorage.getItem("Authorization");

const axiosPrivateUrl = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    Authorization: `${token}`,
  },
});

const UseAxiosPrivate = () => {
  return { axiosPrivateUrl };
};

export default UseAxiosPrivate;
