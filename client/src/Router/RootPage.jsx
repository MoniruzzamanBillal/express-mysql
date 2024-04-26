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
      <Footer />
      {/* footer ends  */}
    </div>
  );
};

export default RootPage;
