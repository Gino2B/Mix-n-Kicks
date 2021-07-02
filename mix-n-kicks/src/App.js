import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Navbar from "./components/Navbar";
import Shoes from "./components/Shoes";
import PostForm from "./components/PostForm";
import CommentForm from "./components/CommentForm";
import Post from "./components/Post";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [shoes, setShoes] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchShoes = async () => {
      const shoeResp = await axios.get(`${baseURL}/shoes`, config);
      const commentsResp = await axios.get(`${baseURL}/comments`, config);

      const comments = commentsResp.data.records;

      const linkedPosts = shoeResp.data.records.map((shoe) => {
        return {
          ...shoe,
          fields: {
            ...shoe.fields,
            comments: shoe.fields.comments
              ? comments.filter((comment) =>
                  shoe.fields.comments.includes(comment.id)
                )
              : [],
          },
        };
      });
      console.log("L", linkedPosts);
      linkedPosts.sort((a, b) => {
        const bDate = new Date(b.createdTime);
        const aDate = new Date(a.createdTime);
        return aDate - bDate;
      });
      setShoes(linkedPosts);
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
              <Shoes
                key={shoe.id}
                shoe={shoe}
                setToggleFetch={setToggleFetch}
              />
            ))}
          </div>
        </Route>
        <Route path="/new">
          <h2>Create A Post</h2>
          <PostForm setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/comment/">
          <h2>Post A Comment</h2>
          <CommentForm setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/posts/:id">
          <Post shoes={shoes} setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/about">
          <div id="about">
            <a href="https://github.com/Gino2B">
              <h3>Github</h3>
            </a>
            <a href="https://www.linkedin.com/in/gene-baybay-80490520b/">
              <h3>Linked In</h3>
            </a>
          </div>
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
