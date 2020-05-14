import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const Characters = ({ refresh, search, setSearch }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const offset = (page - 1) * 100;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-2020-05-14.herokuapp.com/characters?offset=${offset}`
        );
        setData(response.data);
        setTotalPages(Math.round(response.data.data.total / 100));
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [refresh, offset]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://marvel-backend-2020-05-14.herokuapp.com/characters?nameStartsWith=${search}`
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container">
      {isLoading ? (
        <div className="loading">En cours de chargement ...</div>
      ) : (
        <div>
          <Search
            handleSubmit={handleSubmit}
            search={search}
            setSearch={setSearch}
          />
          <Pagination
            search={search}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
          <div className="list">
            {data.data.results.map((character) => {
              const handleCharacter = () => {
                history.push(`/character/${character.id}`, {
                  name: character.name,
                  picture: character.thumbnail.path,
                  comics: character.comics.items,
                });
              };
              return (
                <div
                  className="character-list"
                  key={character.id}
                  onClick={handleCharacter}
                >
                  <br />
                  <div>{character.name}</div>
                  <br />
                  <div>
                    <img
                      alt={character.name}
                      src={`${character.thumbnail.path}/portrait_xlarge.jpg`}
                    />
                  </div>
                  <div>{character.description}</div>
                </div>
              );
            })}
          </div>
          <Pagination
            search={search}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default Characters;
