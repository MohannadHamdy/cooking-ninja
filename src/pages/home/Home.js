import "./home.scss";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const { error, loading, data } = useFetch(`http://localhost:3000/recipes`);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <div className="home">
      {error && <p className="error">Error: {error}</p>}
      {loading && <p className="loading">Hang on...</p>}
      {data && <RecipeList data={data} />}
    </div>
  );
};

export default Home;
