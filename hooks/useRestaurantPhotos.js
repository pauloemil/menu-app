import { useState } from "react";
import axios from "../configs/axios";

export default () => {
  const [results, setResults] = useState({
    data: {},
    loading: false,
    error: null,
  });

  const getPhotos = async (id) => {
    setResults({
      data: {},
      loading: true,
      error: null,
    });
    axios
      .get(`/${id}/photos`)
      .then((resp) => {
        setResults({
          data: resp,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        setResults({
          data: {},
          loading: false,
          error: error,
        });
      });
  };

  return [results, getPhotos];
};
