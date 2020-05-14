import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/img/logo.jpg";

const Header = ({ refresh, setRefresh, setSearch }) => {
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
        Personnages
      </div>
      <div
        className="comics-button"
        onClick={() => {
          setSearch("");
          setRefresh(!refresh);
          history.push("/comics");
        }}
      >
        Comics
      </div>
      <br />
      <br />
    </div>
  );
};

export default Header;
