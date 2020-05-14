import React from "react";
import { useLocation } from "react-router-dom";

const Comic = () => {
  const location = useLocation();
  const { title, picture, creators } = location.state;

  return (
    <div className="list">
      <div className="container character-cv">
        <br />
        <div>{title}</div>
        <br />
        <div>
          <img alt={title} src={`${picture}/portrait_xlarge.jpg`} />
        </div>
        {creators.map((creator, index) => {
          return (
            <div key={index}>
              {creator.role} : {creator.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comic;
