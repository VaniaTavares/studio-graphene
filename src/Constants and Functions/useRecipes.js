import { useEffect, useState } from "react";
import axios from "axios";

const fetchRecipes = async () => {
  const controller = new AbortController();
  const signal = controller.signal;
  try {
    const res = await axios.get(`${process.env.REACT_APP_RANDOM_RECIPES_API}`, {
      signal,
    });
    if (res) return res.data.recipes;
  } catch (err) {
    return err;
  }
};

const useRecipes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      const retrivedRecipes = JSON.parse(savedRecipes);
      setRecipes((prev) => [...prev, ...retrivedRecipes]);
    } else {
      const fetchedRecipes = fetchRecipes();
      if (fetchedRecipes) {
        const localRecipes = JSON.stringify(fetchedRecipes);
        localStorage.setItem("recipes", localRecipes);
        setRecipes((prev) => [...prev, ...fetchedRecipes]);
      } else {
        setIsError(true);
      }
    }
    setIsLoading(false);
  }, []);

  return { isError, isLoading, recipes };
};

export default useRecipes;
