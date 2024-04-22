import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blogCardContainer">
      <div className="blogCardWrapper flex justify-between items-center gap-x-5 ">
        {/* blog card left section starts  */}
        <div className="blogCardLeft w-[58%]   flex flex-col gap-y-8   ">
          {/* heading starts  */}
          <h1 className=" font-semibold text-3xl ">
            temporibus quos deleniti ratione enim accusantium ex impedit maiores
            veritatis officia
          </h1>
          {/* heading ends  */}

          {/* small description starts  */}
          <h1 className="  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aliquid, ducimus unde, nulla itaque facilis tempore harum velit
            magnam architecto amet! Voluptatem iste unde repellat repudiandae
            odio ratione veritatis suscipit......
          </h1>
          {/* small description ends  */}

          {/* read more button starts  */}

          <Link className="    ">
            <button className="  border border-[#41B06E] py-1.5 px-4 rounded font-semibold text-[#41B06E] hover:bg-[#41B06E] hover:text-white hover:drop-shadow-lg active:scale-95 ">
              Read more
            </button>
          </Link>
          {/* read more button ends  */}

          {/*  */}
        </div>
        {/* blog card left section ends  */}

        {/* blog card right  section starts  */}
        <div className="blogCardRight   w-[42%]  ">
          <div className="   blogImgContainer       ">
            <img
              src="https://i.ibb.co/tzQ3Czy/F191123-ARK03-e1620905901310.jpg"
              className="  bgImage  h-full w-full     "
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
