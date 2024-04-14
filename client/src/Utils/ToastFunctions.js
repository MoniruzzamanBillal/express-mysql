import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast for success fully add student
export const studentAddedSuccessfully = () =>
  toast.success("Student added successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for empty input field
export const inputFieldError = () =>
  toast.error("All input fields are required", {
    position: "top-center",
    autoClose: 1400,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

// !  toast for success
export const loggedInSuccessfully = () =>
  toast.success("logged in successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
