import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Navbar from "./components/Navbar";
import Shoes from "./components/Shoes";
import Post from "./components/Post";
import "./App.css";

function App() {
  const [shoes, setShoes] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchShoes = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setShoes(resp.data.records);
    };
    fetchShoes();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <h2>Home</h2>
        <main>
          {shoes.map((shoe) => (
            <Shoes key={shoe.id} shoe={shoe} setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      <Route path="/new">
        <Post />
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
