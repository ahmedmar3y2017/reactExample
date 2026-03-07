import { use, useEffect, useState, useRef } from "react";
import "./App.css";
import ListData from "./components/ListData/ListData";
import Search from "./components/Search/Search";
import StartExample from "./components/StartExample/StartExample";
import TaskExample from "./components/TaskExample/TaskExample";
import GithubExample from "./components/GithubExample/GithubExample";
import TimerExample from "./components/TimerExample/TimerExample";
import UseReducer from "./components/UseReducer/UseReducer";
import InputForm from "./components/CustomHook/InputForm";
import usePrevState from "./components/PrevState/usePrevState";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>

      <Footer></Footer>

      {/* <StartExample></StartExample> */}
      {/* <TaskExample></TaskExample> */}

      {/* <GithubExample></GithubExample> */}

      {/* <TimerExample> </TimerExample> */}

      {/* <UseReducer></UseReducer> */}

      {/* <InputForm></InputForm> */}
    </>
  );
}

export default App;
