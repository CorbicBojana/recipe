import React, { useEffect } from "react";

import Nav from "./components/Nav";
import Search from "./components/Search";

const style = {
  backgroundColor: "#f7f7f7",
  width: "100vw",
  height: "100vh"
};

function App() {
  const getSearchRecipe = async () => {
    const api_call = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
    );
    const response = await api_call.json();
    console.log(response);
  };

  useEffect(() => {
    getSearchRecipe();
  }, []);

  return (
    <div className="app" style={style}>
      <Nav />
      <Search />
    </div>
  );
}

export default App;
