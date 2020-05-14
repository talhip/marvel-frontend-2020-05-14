import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const Comics = ({ refresh, search, setSearch }) => {
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
          `https://marvel-backend-2020-05-14.herokuapp.com/comics?offset=${offset}`
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
      // const offset = (page - 1) * 100;
      const response = await axios.get(
        `https://marvel-backend-2020-05-14.herokuapp.com/comics?titleStartsWith=${search}`
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
            {data.data.results.map((comic) => {
              const handleComic = () => {
                history.push(`/comic/${comic.id}`, {
                  title: comic.title,
                  picture: comic.thumbnail.path,
                  creators: comic.creators.items,
                });
              };
              return (
                <div
                  className="character-info"
                  key={comic.id}
                  onClick={handleComic}
                >
                  <br />
                  <div>{comic.title}</div>
                  <br />
                  <div>
                    <img
                      alt={comic.title}
                      src={`${comic.thumbnail.path}/portrait_xlarge.jpg`}
                    />
                  </div>
                  <div>{comic.description}</div>
                  <br />
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

export default Comics;
