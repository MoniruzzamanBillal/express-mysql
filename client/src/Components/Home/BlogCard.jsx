import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, ind }) => {
  const {
    uid,
    writer,
    writerImg,
    category,
    title,
    titleImg,
    description,
    creationDate,
    blogId,
  } = blog;

  const [smallDescription, setSmallDescription] = useState([]);

  //! effect ttto get description text

  useEffect(() => {
    if (blog) {
      const tempDiv = document.createElement("div");

      tempDiv.innerHTML = description;
      const paraTtexts = tempDiv.querySelectorAll("p");

      let allParagraphs = "";

      paraTtexts.forEach((paragraph) => {
        allParagraphs += paragraph.textContent;
      });

      setSmallDescription(allParagraphs);
    }
  }, [blog, description]);

  return (
    <div className="blogCardContainer">
      <div className="blogCardWrapper flex justify-between items-center gap-x-4 ">
        {/* blog card left section starts  */}
        <div
          className={`${
            ind % 2 === 0 ? "  order-1 " : " order-2 "
          }  blogCardLeft  w-[54%]    flex flex-col gap-y-3 lg:gap-y-6 xl:gap-y-8`}
        >
          {/* heading starts  */}
          <h1 className=" font-semibold text-lg lg:text-2xl xl:text-3xl ">
            {title}
          </h1>
          {/* heading ends  */}

          {/* small description starts  */}
          <h1 className="  text-sm lg:text-base ">
            {smallDescription && smallDescription?.length >= 450
              ? smallDescription.slice(0, 450) + "......."
              : smallDescription}
          </h1>
          {/* small description ends  */}

          {/* read more button starts  */}

          <Link to={`/detail/${blogId}`} className="    ">
            <button className="  border border-[#41B06E] py-1.5 px-4 rounded font-semibold text-[#41B06E] hover:bg-[#41B06E] hover:text-white hover:drop-shadow-lg active:scale-95 ">
              Read more
            </button>
          </Link>
          {/* read more button ends  */}

          {/*  */}
        </div>
        {/* blog card left section ends  */}

        {/* blog card right  section starts  */}
        <div
          className={` ${
            ind % 2 === 0 ? "  order-2 " : " order-1 "
          } blogCardRight w-[46%]  `}
        >
          <div className="   blogImgContainer rounded-md overflow-auto ">
            <img
              // src="https://i.ibb.co/P5sGcht/images.jpg"
              src={titleImg}
              className=" max-h-[17.5rem]  bgImage  h-full w-full     "
              alt=""
            />
          </div>
        </div>
        {/* blog card right  section ends  */}
      </div>
    </div>
  );
};

export default BlogCard;
