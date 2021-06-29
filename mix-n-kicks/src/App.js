import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <h2>Home</h2>
      </Route>
      <Route path="/new">
        <h2>Create post</h2>
      </Route>
      <Route path="/comment/">
        <h2>Create comment</h2>
      </Route>
      <Route path="/posts/:id">
        <h2>View Post/Comments</h2>
      </Route>
    </div>
  );
}

export default App;
