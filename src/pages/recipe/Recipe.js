import { useState } from "react";
import { useParams } from "react-router-dom";
import "./recipe.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Recipe = () => {
  const { Id } = useParams();
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/recipes/${Id}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();

        setItemData(json);
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
  // title ingredients method cookingTime

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">Error: {error}</p>}
      {loading && <p className="loading">Hang on...</p>}
      {itemData && (
        <>
          <h2 className="page-title">How to make {itemData.title}</h2>
          <p>it will take: {itemData.cookingTime}</p>

          <ul>
            {itemData.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>

          <p className="method">Method: {itemData.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
