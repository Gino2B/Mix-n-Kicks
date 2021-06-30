import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Navbar from "./components/Navbar";
import Shoes from "./components/Shoes";
import Post from "./components/Post";
import Comment from "./components/Comment";
import Card from "./components/Card";
import Footer from "./components/Footer";
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
      <main>
        <Route exact path="/">
          <h2>Home</h2>
          <div id="posts-container">
            {shoes.map((shoe) => (
              <Link to={`/posts/${shoe.id}`}>
                <Shoes
                  key={shoe.id}
                  shoe={shoe}
                  setToggleFetch={setToggleFetch}
                />
              </Link>
            ))}
          </div>
        </Route>
        <Route path="/new">
          <h2>Create A Post</h2>
          <Post setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/comment/">
          <h2>Post A Comment</h2>
          <Comment setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/posts/:id">
          <Card shoes={shoes} />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
