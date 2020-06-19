import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./containers/Characters";
import Character from "./containers/Character";
import FavoriteCharacter from "./containers/FavoriteCharacter";
import Comics from "./containers/Comics";
import Comic from "./containers/Comic";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight);

function App() {
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  const [tokenCharacter, setTokenCharacter] = useState({});

  return (
    <Router>
      <Header
        refresh={refresh}
        setRefresh={setRefresh}
        setSearch={setSearch}
        setTokenCharacter={setTokenCharacter}
      />
      <Switch>
        <Route path="/comic/:id">
          <Comic />
        </Route>
        <Route path="/comics">
          <Comics refresh={refresh} search={search} setSearch={setSearch} />
        </Route>
        <Route path="/character/:id">
          <Character setTokenCharacter={setTokenCharacter} />
        </Route>
        <Route path="/favoritecharacter/">
          <FavoriteCharacter
            tokenCharacter={tokenCharacter}
            setTokenCharacter={setTokenCharacter}
          />
        </Route>
        <Route path="/">
          <Characters refresh={refresh} search={search} setSearch={setSearch} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
