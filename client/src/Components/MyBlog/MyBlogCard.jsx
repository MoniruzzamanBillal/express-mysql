import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyBlogCard = ({ blog }) => {
  const [smallDescription, setSmallDescription] = useState([]);

  //!   useeffect to get user description
  useEffect(() => {
    const tempDiv = document.createElement("div");

    tempDiv.innerHTML = blog?.description;

    const paragraphs = tempDiv.querySelectorAll("p");

    let test = "";

    paragraphs.forEach((paragraph) => {
      test += paragraph.textContent;
    });

    setSmallDescription(test);
  }, [blog]);

  return (
    <div className="blogCardContainer ">
      <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-300 bg-gray-100 hover:bg-gray-200 group cursor-pointer shadow-xl hover:shadow-2xl h-[30rem] ">
        <div className=" imageContainer  relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img
            src={blog?.titleImg}
            alt="Photo by Lorenzo Herrera"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-5">
          <h2 className="mb-3.5 text-lg font-semibold text-gray-800">
            <a
              href="#"
              className="transition duration-100 hover:text-indigo-700 active:text-indigo-800 font-semibold "
            >
              {blog?.title}
            </a>
          </h2>

          <p className="mb-5 text-gray-800 ">
            {smallDescription && smallDescription?.length >= 120
              ? smallDescription.slice(0, 120)
              : smallDescription}
          </p>

          <div className="readmoreBtn flex items-center gap-x-1 text-indigo-700 ">
            <Link
              to={`/detail/${blog?.blogId}`}
              className=" text-lg font-semibold  "
            >
              Read more
            </Link>

            <FaArrowRightLong className=" text-lg group-hover:translate-x-1 transition-all duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogCard;
