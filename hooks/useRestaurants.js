import { useState } from "react";
import axios from "../configs/axios";

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const searchRestaurants = async (term) => {
    setResults({
      data: null,
      loading: true,
      error: null,
    });
    axios
      .get("/search", {
        params: {
          near: "new york",
          query: term,
        },
      })
      .then((resp) => {
        setResults({
          data: resp.data.results,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        setResults({
          data: null,
          loading: false,
          error: error,
        });
      });
  };
  return [results, searchRestaurants];
};
