import React from "react";
import { UseAuth } from "../Context/AuthContext";

const MyBlogs = () => {
  const { user, userLoading } = UseAuth();

  console.log(user);

  return (
    <div className="MyBlogsContainer">
      <div className="MyBlogsWrapper">
        <h1>MyBlogs</h1>
        <h1>MyBlogs</h1>
        <h1>MyBlogs</h1>
        <h1>MyBlogs</h1>
        <h1>MyBlogs</h1>
        <h1>MyBlogs</h1>
        <h1>MyBlogs</h1>
      </div>
    </div>
  );
};

export default MyBlogs;
