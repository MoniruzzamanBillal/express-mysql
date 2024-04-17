import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { UseAuth } from "../Context/AuthContext";
import UseAxiosPrivate from "../Hooks/UseAxiosPrivate";
import {
  studentAddedSuccessfully,
  userAddedSuccessfully,
} from "../Utils/ToastFunctions";

const Register = () => {
  const { setToken, user } = UseAuth();
  const navigate = useNavigate();
  const { axiosPrivateUrl } = UseAxiosPrivate();

  //   use form hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleAddUser = async (data) => {
    const userName = data?.userName;
    const userEmail = data?.userEmail;
    const userPassword = data?.password;
    const userImage = data?.file_input[0];

    const formData = new FormData();
    formData.append("image", userImage);
    const imageResponse = await axios.post(
      "https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314",
      formData
    );
    const userImg = imageResponse?.data?.data?.url;

    const id = Date.now();

    console.log(id);

    const userData = {
      id,
      userName,
      userPassword,
      userImg,
      userEmail,
    };

    axiosPrivateUrl
      .post("/api/auth/userRegister", userData)
      .then((response) => {
        const { error } = response?.data;

        //! execute it if any error occurs
        if (error) {
          toast.error(`${error?.sqlMessage}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return;
        }

        userAddedSuccessfully();
        reset();
        setTimeout(() => {
          navigate("/login");
        }, 1200);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="RegisterContainer">
      <div className="RegisterWrapper  py-12  bg-[url('https://i.ibb.co/6bsNLj8/hosting-login.jpg')] bgImage flex justify-center items-center  ">
        <div className="card  bg-white  py-9 px-4 w-[92%] xsm:w-[82%] sm:w-[72%] md:w-[64%] xmd:w-[55%] lg:w-[46%] rounded border border-gray-200  shadow-2xl   ">
          <h1 className="mb-5 text-xl font-bold text-center text-gray-700 headingFont sm:text-2xl xsm:font-semibold sm:font-medium sm:mb-6 md:mb-8 lg:mb-10">
            Register
          </h1>

          <form
            onSubmit={handleSubmit(handleAddUser)}
            className=" w-[92%] xsm:w-[80%] sm:w-[76%] md:w-[72%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  "
          >
            {/* name input starts  */}
            <div className="nameInput flex flex-col  gap-1">
              <label htmlFor="userName" className="text-gray-800 ">
                Name
              </label>
              <input
                type="text"
                id="userName"
                {...register("userName", {
                  required: "Name is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-300     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter your name"
              />

              {errors?.userName && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.userName?.message}
                </p>
              )}
            </div>
            {/* name input ends  */}

            {/* email input  */}
            <div className="emailInput flex flex-col  gap-1">
              <label htmlFor="userEmail" className="text-gray-800 ">
                Email
              </label>
              <input
                type="email"
                id="userEmail"
                {...register("userEmail", {
                  required: "Email is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-300     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter your email"
              />

              {errors?.userEmail && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.userEmail?.message}
                </p>
              )}
            </div>
            {/* email input  */}

            {/* user image field  */}
            <div className="flex flex-col  gap-1 userImage ">
              <label htmlFor="file_input" className="text-gray-800 ">
                User image
              </label>
              <input
                {...register("file_input", {
                  required: "user image is required",
                })}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                id="file_input"
                type="file"
              />

              {errors?.file_input && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.file_input?.message}
                </p>
              )}
            </div>
            {/* user image field  */}

            {/* password input  */}
            <div className="passwordInput flex flex-col  gap-1">
              <label htmlFor="password" className="text-gray-800 ">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="block w-full m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5 outline-none "
                placeholder="Enter your password"
              />
              {errors?.password && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            {/* password input  */}

            <button
              disabled={isSubmitting}
              className="flex items-center justify-center w-full py-2 text-lg font-medium rounded  bg-sky-500 hover:bg-sky-600 text-gray-50"
            >
              {isSubmitting ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Register"
              )}
            </button>
          </form>
          <div className="mt-4 text-sm text-center registerDivert sm:text-base md:text-lg ">
            <p>
              Already have an account ?
              <span className="text-blue-500 logoFont">
                <Link to={"/login"}>Login here</Link>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
