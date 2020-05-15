import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
const FavoriteCharacter = ({ tokenCharacter }) => {
  const history = useHistory();
  const tokens = Object.values(tokenCharacter);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(tokens);

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
        const newData = [...data];
        newData.push(copyData);
        setData(newData);
        setIsLoading(false);
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
          {data[0].length === 0 ? (
            <div className="loading">Ajoute un personnage à tes favoris !</div>
          ) : (
            <div className="list">
              {data[0].map((character) => {
                const handleCharacter = () => {
                  Cookies.remove(`tokenCharacter${character.id}`);
                  history.push("/");
                };
                return (
                  <div
                    className="character-list favorite-hover"
                    key={character.id}
                  >
                    <br />
                    <h4 className="pointer" onClick={handleCharacter}>
                      Supprime-moi de tes favoris !
                    </h4>
                    <br />
                    <div>
                      <h2>{character.name}</h2>
                    </div>
                    <br />
                    <div>
                      <img
                        alt={character.name}
                        src={`${character.thumbnail.path}/portrait_xlarge.jpg`}
                      />
                    </div>
                    <div>
                      <h3>{character.description}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FavoriteCharacter;
