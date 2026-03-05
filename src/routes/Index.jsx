import React from "react";
import { use, useEffect, useState, useRef } from "react";
import ListData from "../components/ListData/ListData";
import Search from "../components/Search/Search";
import StartExample from ".././components/StartExample/StartExample";
import TaskExample from "../components/TaskExample/TaskExample";
import GithubExample from "../components/GithubExample/GithubExample";
import TimerExample from "../components/TimerExample/TimerExample";
import UseReducer from "../components/UseReducer/UseReducer";
import InputForm from "../components/CustomHook/InputForm";
import usePrevState from "../components/PrevState/usePrevState";
const Index = () => {
  const [searchTerm, setSearchTerm] = useState("java");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState(searchTerm);

  const [data, setData] = useState([]);

  const prevValue = usePrevState(debounceSearchTerm);

  // use ref to get element
  // use ref update value without re-rendering the component and also to store previous value of search term to compare with current search term to avoid multiple api calls when user is typing
  // const prevSearchTerm = useRef();
  // useEffect(() => {
  //   prevSearchTerm.current = debounceSearchTerm;
  // });

  // when app load at the first time and also when searchTerm changes with debounce to avoid multiple api calls when user is typing
  useEffect(() => {
    const debounce = setTimeout(() => {
      console.log("debounce");

      setDebounceSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(debounce);
    // setDebounceSearchTerm(searchTerm);
  }, [searchTerm]);

  console.log("rerender");

  // if debounce search term changes then call the api to fetch data from wikipedia and set the data to state
  useEffect(() => {
    const searchWiki = async () => {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${debounceSearchTerm}&format=json&origin=*`,
      );

      const data = await response.json();
      setData(data.query.search);
    };

    console.log("prevSearchTerm : ", prevValue);

    // delay for 2 sec and also enhance to avoid multiple api calls when user is typing
    const debounce = setTimeout(() => {
      if (!data.length) {
        if (debounceSearchTerm) searchWiki();
      } else if (prevValue && prevValue !== debounceSearchTerm) {
        searchWiki();
      }
    }, 1000);

    return () => clearTimeout(debounce);
  }, [debounceSearchTerm, prevValue]);
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <p>previous term: {prevValue}</p>
      <p>current term: {debounceSearchTerm}</p>

      <ListData data={data} />
    </>
  );
};

export default Index;
