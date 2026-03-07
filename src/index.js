import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Index from "./routes/Index";
import ErrorPage from "./routes/ErrorPage";
import UserLayout from "./routes/UserLayout";
import UserInfo from "./routes/UserInfo";
import UserEdit from "./routes/UserEdit";
import Login from "./routes/Login";
import Register from "./routes/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Index></Index> },
      { path: "about", element: <About /> },
      { path: "contactUs", element: <Contact /> },
    ],
  },
  {
    path: "/user",
    element: <UserLayout></UserLayout>,
    children: [
      { index: true, element: <div> User Home </div> },
      { path: ":userId/info", element: <UserInfo></UserInfo> },
      { path: "edit", element: <UserEdit></UserEdit> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}> </RouterProvider>);
