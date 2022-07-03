import { useState, useEffect } from "react";

export const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        // if (response && response.ok) {
        //   const json = await response.json();
        //   setData(json);
        //   setLoading(false);
        //   setError(null);
        // } else {
        //   throw new Error(response.statusText);
        // }
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        console.log("response from usefetch", response);
        const json = await response.json();
        setLoading(false);
        console.log("data from usefetch", json);
        setData(json);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [url, data]);

  return { data, loading, error };
};
