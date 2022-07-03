import "./RecipeList.css";
import { Link } from "react-router-dom";

const RecipeList = ({ data }) => {
  return (
    <div className="recipe-list">
      {data.map((recipe) => (
        <div className="card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
          <p>{recipe.cookingTime} to make</p>
          <Link to={`/recipes/${recipe.id}`}>read more</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
