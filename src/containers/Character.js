import React from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Character = ({ setTokenCharacter }) => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const { name, picture, comics } = location.state;

  const handleAdd = () => {
    Cookies.set(`tokenCharacter${id}`, id, { expires: 2000 });
    const tokens = Cookies.get();
    setTokenCharacter(tokens);
    history.push("/");
  };

  return (
    <div className="list">
      <div className="container character-cv" onClick={handleAdd}>
        <br />
        <h4>Ajoute-moi à tes favoris !</h4>
        <br />
        <div>
          <h2>{name}</h2>
        </div>
        <br />
        <div>
          <img alt={name} src={`${picture}/portrait_xlarge.jpg`} />
        </div>
        {comics.map((comic, index) => {
          return (
            <div key={index}>
              <h3>{comic.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
