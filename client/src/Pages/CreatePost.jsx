import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseAuth } from "../Context/AuthContext";
import UseAxiosPrivate from "../Hooks/UseAxiosPrivate";
import {
  blogAddedSuccessfully,
  inputFieldError,
} from "../Utils/ToastFunctions";

// modules for text editer
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
  ],
};

const CreatePost = () => {
  const { user } = UseAuth();
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [titleImg, setTitleImg] = useState(null);
  const [category, setCategory] = useState(null);
  const [fileName, setFileName] = useState("");

  const { axiosPrivateUrl } = UseAxiosPrivate();

  //! function for changing title image
  const handleImage = async (e) => {
    const imgFile = e.target.files[0];

    // console.log(imgFile);
    setFileName(imgFile?.name);

    const formData = new FormData();
    formData.append("image", imgFile);

    const imageResponse = await axios.post(
      "https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314",
      formData
    );

    setTitleImg(imageResponse?.data?.data?.display_url);
  };

  //!   function for creating new blog
  const handleAddBlog = () => {
    if (!title || !titleImg || !value || !category) {
      return inputFieldError();
    }

    if (
      !title.trim() ||
      !titleImg.trim() ||
      !value.trim() ||
      !category.trim()
    ) {
      return inputFieldError();
    }

    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const writingDate = `${date}-${month}-${year}`;

    const blogData = {
      uid: user?.userId,
      writer: user?.userName,
      writerImg: user?.userImg,
      category,
      title,
      titleImg,
      description: value,
      creationDate: writingDate,
    };

    console.log(blogData);

    axiosPrivateUrl
      .post("/api/blog/create", blogData)
      .then((response) => {
        console.log(response?.data);

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

        blogAddedSuccessfully();
      })
      .catch((err) => console.log(err));
  };

  //   console.log(user);

  return (
    <div className="createPostContainer   ">
      <div className="createPostWrapper py-12  w-[95%] xsm:w-[92%] sm:w-[90%]  m-auto  pb-4 ">
        {/* category container  */}

        {/* category container ends  */}

        <div className="categoryContainer    mb-2   ">
          <input
            className=" block w-full py-2 px-4 text-xl border-none outline-none   text-gray-600 font-medium "
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>

        {/* title container  */}
        <div className="titleContainer   mb-2   ">
          <input
            className=" block w-full py-3 px-4 text-2xl border-none outline-none   text-gray-600 font-medium "
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        {/* title container ends  */}

        {/* title image container  */}
        <div className="titleImage  py-4 mb-3   w-[56%]  border-2 border-gray-300 border-dotted ">
          <div className="labelCOntainer  text-center  ">
            <label
              htmlFor="file_input"
              className="  bg-rose-500 hover:bg-rose-600 font-medium text-gray-50 text-sm py-3 px-4 rounded-md cursor-pointer "
            >
              {fileName ? fileName : "  Upload title image"}
            </label>
          </div>

          <input
            onChange={(e) => handleImage(e)}
            className=" hidden  w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  "
            id="file_input"
            type="file"
          />
        </div>
        {/* title image container ends */}

        {/* text editor  */}
        <div className="textEditor   h-[22rem] ">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="  h-full w-full font-medium  "
            modules={modules}
          />
        </div>
        {/* text editor ends  */}

        {/* submit button  */}
        <div className="submit  pt-14 text-center  ">
          <button
            onClick={() => handleAddBlog()}
            className=" cursor-pointer text-gray-50 bg-violet-700 hover:bg-violet-800 active:scale-95 hover:scale-105 hover:shadow-md py-2 px-5 rounded font-medium headingFont  "
          >
            Submit
          </button>
        </div>
        {/* submit button ends */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreatePost;
