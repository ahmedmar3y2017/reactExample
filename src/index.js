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
import CounterRedux from "./routes/CounterRedux";
import CounterRedux1 from "./routes/CounterRedux1";
import { Provider } from "react-redux";
import { counterStore } from "./state/store";
import CounterRedux2 from "./routes/CounterRedux2";
import store1 from "./state/store/configureStore";
import CloneElement from "./routes/CloneElement";
import Button from "./components/CloneElement/Button";
import ButtonGroup from "./components/CloneElement/ButtonGroup";

const buttonhandler = () => {
  console.log("Button clicked");
};

const dynamicComponent = [
  {
    componentname: Button,
    data: {
      name: "Single Button ",
      onClick: () => {
        console.log("Button clicked dynamic single");
      },
    },
  },
  {
    componentname: ButtonGroup,
    data: [
      {
        name: "Button First dynamic",
        onClick: () => {
          console.log("Button clicked dynamic first");
        },
      },
      {
        name: "Button Second dynamic",
        onClick: () => {
          console.log("Button clicked dynamic second");
        },
      },
    ],
  },
];

const buttonComponents = dynamicComponent
  .filter((item) => item.componentname)
  .map((item, index) => {
    const Component = item.componentname;
    if (Array.isArray(item.data)) {
      return (
        <Component key={index}>
          {item.data.map((buttonData, btnIndex) => (
            <Button
              key={btnIndex}
              name={buttonData.name}
              onClick={buttonData.onClick}
              className={"primary"}
            />
          ))}
        </Component>
      );
    } else {
      return (
        <Component
          key={index}
          name={item.data.name}
          onClick={item.data.onClick}
          className={"primary"}
        />
      );
    }
  });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Index></Index> },
      { path: "about", element: <About /> },
      { path: "contactUs", element: <Contact /> },
      { path: "counterRedux", element: <CounterRedux /> },
      {
        path: "counterRedux1",
        element: (
          <Provider store={counterStore}>
            <CounterRedux1 />
          </Provider>
        ),
      },
      {
        path: "counterRedux2",
        element: (
          <Provider store={store1}>
            <CounterRedux2 />
          </Provider>
        ),
      },
      {
        path: "CloneElement",
        element: (
          <CloneElement>
            <div className="d-flex flex-column gap-2">
              <Button name="Button 1" onClick={buttonhandler}>
                Single
              </Button>
            </div>

            <div className="d-flex flex-column gap-2">
              <ButtonGroup>
                <Button>Button First</Button>
                <Button>Button Second</Button>
              </ButtonGroup>
            </div>

            <div className="d-flex flex-column gap-2">{buttonComponents}</div>
          </CloneElement>
        ),
      },
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
