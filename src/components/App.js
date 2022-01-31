import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About"

function App(props) {
  return (
    <div>
      <NavBar />
      <Home username={props.username} city={props.city}/>
      <About />
    </div>
  );
}

export default App;
