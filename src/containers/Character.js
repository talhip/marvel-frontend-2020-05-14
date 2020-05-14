import React from "react";
import { useLocation } from "react-router-dom";

const Character = () => {
  const location = useLocation();
  const { name, picture, comics } = location.state;

  return (
    <div className="list">
      <div className="container character-cv">
        <br />
        <div>{name}</div>
        <br />
        <div>
          <img alt={name} src={`${picture}/portrait_xlarge.jpg`} />
        </div>
        {comics.map((comic, index) => {
          return <div key={index}>{comic.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Character;
