import React from "react";

const Search = ({ handleSubmit, search, setSearch }) => {
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="field"
          placeholder="Que recherchez-vous ?"
          type="text"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <input className="submit-button" type="submit" value="Rechercher" />
      </form>
    </div>
  );
};

export default Search;
