import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import AddStudent from "../Pages/AddStudent";
import Register from "../Pages/Register";
import CreatePost from "../Pages/CreatePost";
import Home from "../Pages/Home";
import RootPage from "./RootPage";
import BlogDetail from "../Pages/BlogDetail";
import EditBlog from "../Pages/EditBlog";
import MyBlogs from "../Pages/MyBlogs";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/createPost",
        element: <CreatePost />,
      },
      {
        path: "/myblog",
        element: <MyBlogs />,
      },
      {
        path: "/detail/:id",
        element: <BlogDetail />,
      },
      {
        path: "/edit/:id",
        element: <EditBlog />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/addStudent",
    element: <AddStudent />,
  },
]);

export default Routes;
