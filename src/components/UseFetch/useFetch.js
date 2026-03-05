import React, { useEffect } from "react";

const useFetch = ({ url }) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    if (!url) return;
    debugger;
    setLoading(true);
    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(text || "API Error");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [url]);
  return { loading, data, error, setData };
};

export default useFetch;
