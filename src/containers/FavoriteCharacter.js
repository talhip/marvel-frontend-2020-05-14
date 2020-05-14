import React, { useState, useEffect } from "react";
import axios from "axios";
const FavoriteCharacter = ({ tokenCharacter }) => {
  const tokens = Object.values(tokenCharacter);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  //   const id = 1011334;
  useEffect(() => {
    const fetchData = async () => {
      try {
        for (let i = 0; i < tokens.length; i++) {
          const id = tokens[i];
          const response = await axios.get(
            `https://marvel-backend-2020-05-14.herokuapp.com/favoritecharacter?id=${id}`
          );
          setData(response.data);
          console.log(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <div className="loading">En cours de chargement ...</div>
      ) : (
        <div>{data.data.results[0].name}</div>
      )}
    </div>
  );
};

export default FavoriteCharacter;
