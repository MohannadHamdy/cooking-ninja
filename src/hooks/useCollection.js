import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const useCollection = (c) => {
  //const { error, loading, data } = useFetch(`http://localhost:3000/recipes`);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const ref = collection(db, c);
    getDocs(ref).then((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setData(results);
    });
    console.log(data);
    setLoading(false);
    //   if (response && response.ok) {
    //     const json = await response.json();
    //     setData(json);
    //     setLoading(false);
    //     setError(null);
    //   } else {
    //     throw new Error(response.statusText);
    //   }
    // } catch (error) {
    //   setError(error.message);
    //   setLoading(false);
    // }
  }, []);
  return { data, loading, error };
};
