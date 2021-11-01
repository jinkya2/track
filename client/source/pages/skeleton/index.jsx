import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Analytics from "../analytics/index";
import Home from "../home/index";
import Input from "../input/index";
import Todo from "../todo/index";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

function Skeleton() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <nav>
            <div className="nav">
              <Link to="/home">Home</Link>
              <Link to="/input">Input</Link>
              <Link to="/analytics">Analytics</Link>
              <Link to="/todo">Todo</Link>
            </div>
          </nav>

          <Header />

          <Switch>
            <Route path="/input"><Input /></Route>
            <Route path="/analytics"><Analytics/></Route>
            <Route path="/todo"><Todo/></Route>
            <Route path="/home"><Home/></Route>
            <Route path="/"><Input /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

function About() {
  return <p>About</p>;
}
function Projects() {
  return <p>Projects</p>;
}

export default Skeleton;

{
  /* <BrowserRouter>
                <Switch>
                    <Route path="/about"><About/></Route>
                    <Route path="/projects"><Projects/></Route>
                    <Route path="/"><Home/></Route>
                </Switch>

                <nav>
                    <Link to="/">Home</Link>  
                    <Link to="/about"> About</Link>  
                    <Link to="/projects"> Projects</Link>
                </nav>
            </BrowserRouter> */
}
