import { useState, useEffect } from "react";

export const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response && response.ok) {
          const json = await response.json();
          setData(json);
          setLoading(false);
          setError(null);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
