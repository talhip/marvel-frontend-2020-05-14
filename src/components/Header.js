import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../assets/img/logo.jpg";

const Header = ({ refresh, setRefresh, setSearch, setTokenCharacter }) => {
  const history = useHistory();

  return (
    <div className="container header">
      <div className="logo">
        <img
          alt="logo"
          src={logo}
          onClick={() => {
            setSearch("");
            setRefresh(!refresh);
            history.push("/");
          }}
        />
      </div>
      <div
        className="characters-button"
        onClick={() => {
          setSearch("");
          setRefresh(!refresh);
          history.push("/");
        }}
      >
        <h1>Personnages</h1>
      </div>
      <div
        className="comics-button"
        onClick={() => {
          setSearch("");
          setRefresh(!refresh);
          history.push("/comics");
        }}
      >
        <h1>Comics</h1>
      </div>
      <div
        className="favorite-character-button"
        onClick={() => {
          const tokens = Cookies.get();
          setTokenCharacter(tokens);
          history.push("/favoritecharacter");
        }}
      >
        <h1>Personnages Favoris</h1>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Header;
