import React from "react";
import HomeBar from "./NavBar/HomeBar";
import  Home  from "./Pages/Home";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <HomeBar />
      <Home />
      <Main/>
    </div>
  );
}

export default App;
