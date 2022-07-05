import "./home.scss";
import RecipeList from "../../components/RecipeList";
// import { useFetch } from "../../hooks/useFetch";
import { useCollection } from "../../hooks/useCollection";
const Home = () => {
  const { data, error, loading } = useCollection("recipes");

  return (
    <div className="home">
      {error && <p className="error">Error: {error}</p>}
      {loading && <p className="loading">Hang on...</p>}
      {data && <RecipeList data={data} />}
    </div>
  );
};

export default Home;
