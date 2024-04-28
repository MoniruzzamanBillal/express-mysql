import React from "react";
import NavBar from "../Components/shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/shared/Footer";

const RootPage = () => {
  return (
    <div className="RootPageContainer">
      {/* nav container starts  */}
      <NavBar />
      {/* nav container ends  */}

      {/* body container starts  */}
      <div className="bodyContainer pt-[4.2rem] ">
        <Outlet />
      </div>
      {/* body container ends  */}

      {/* footer starts  */}
      <div className="footerSection bg-gray-600 ">
        <div className="py-4 text-center text-sm text-gray-100">
          © 2024 - All rights reserved.
        </div>
      </div>
      {/* footer ends  */}
    </div>
  );
};

export default RootPage;
