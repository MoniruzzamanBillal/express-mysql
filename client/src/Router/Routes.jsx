import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import AddStudent from "../Pages/AddStudent";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <p>Home</p>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addStudent",
    element: <AddStudent />,
  },
]);

export default Routes;
