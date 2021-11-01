import React, { useState } from "react";
import { render } from "react-dom";
import { getUsers } from "./adapters/common/usersAPI";
import Skeleton from './pages/skeleton/index.jsx';
import "./styles/style.css";
import "./styles/style.scss";

function App(){
  return(
    <React.Fragment>
      <Skeleton/>
    </React.Fragment>
  )
}

render(<App />, document.getElementById("root"));

/**
console.log("Welcome Webpack!");
const fancyFunc = () => {
    return [1, 2]; 
  };
const [a, b] = fancyFunc();
getUsers().then(json => console.log(json));
function App() {
    const [state, setState] = useState("CLICK ME");
    return (
      <React.Fragment>
        <button onClick={() => setState("CLICKED")}>{state}</button>
        <Home/>
      </React.Fragment>
    );
}
 */