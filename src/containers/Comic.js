import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Comic = () => {
  const history = useHistory();
  const location = useLocation();
  const { title, picture, creators } = location.state;

  return (
    <div className="list">
      <div
        className="container character-cv"
        onClick={() => history.push("/comics")}
      >
        <br />
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
