import React from "react";
import useFetch from "../UseFetch/useFetch";

const GithubExample = () => {
  const { loading, data, error, setData } = useFetch({
    url: "https://api.github.com/users",
  });

  // const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("https://api.github.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);
  if (loading) {
    debugger;
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <h1>Github Users</h1>
      {data?.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.login}</li>
          ))}
        </ul>
      )}

      <button style={{ marginTop: "10px" }} onClick={() => setData(null)}>
        Clear Data
      </button>
    </>
  );
};

export default GithubExample;
