import "./home.scss";
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import RecipeList from "../../components/RecipeList";

const Home = () => {
  // const { error, loading, data } = useFetch(
  //   "https://jsonplaceholder.typicode.com/todos/"
  // );
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/recipes", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();

        setData(json);
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
  }, []);
  return (
    <div className="home">
      {error && <p className="error">Error: {error}</p>}
      {loading && <p className="loading">Hang on...</p>}
      {data && <RecipeList data={data} />}
    </div>
  );
};

export default Home;
