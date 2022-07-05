import "./RecipeList.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const RecipeList = ({ data }) => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="recipe-list">
      {data.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
          <p>{recipe.cookingTime} mins to make</p>
          <Link to={`/recipes/${recipe.id}`}>read more</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
