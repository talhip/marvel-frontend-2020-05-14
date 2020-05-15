import React, { useState, useEffect } from "react";
import axios from "axios";
const FavoriteCharacter = ({ tokenCharacter }) => {
  const tokens = Object.values(tokenCharacter);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  //   const id = 1011334;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const copyData = [];
        for (let i = 0; i < tokens.length; i++) {
          const id = tokens[i];
          const response = await axios.get(
            `https://marvel-backend-2020-05-14.herokuapp.com/favoritecharacter?id=${id}`
          );
          copyData.push(response.data.data.results[0]);
        }
        // console.log(copyData);
        const newData = [...data];
        newData.push(copyData);
        console.log(newData);
        setData(newData);

        setIsLoading(false);
        // console.log(data);
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
        <div>
          <h3>
            Si vous consultez la console et/ou vos cookies ... La liste est là !
          </h3>
        </div>
      )}
    </div>
  );
};

export default FavoriteCharacter;
