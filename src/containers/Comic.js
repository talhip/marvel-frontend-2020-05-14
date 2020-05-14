import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Comic = () => {
  const location = useLocation();
  const { id } = useParams();
  const { title, picture, creators } = location.state;

  return (
    <div className="list">
      <div className="container character-cv">
        <br />
        <h4>{id} Ajoute moi à tes favoris !</h4>
        <div>
          <h2>{title}</h2>
        </div>
        <br />
        <div>
          <img alt={title} src={`${picture}/portrait_xlarge.jpg`} />
        </div>
        {creators.map((creator, index) => {
          return (
            <div key={index}>
              <h3>
                {creator.role} : {creator.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comic;
