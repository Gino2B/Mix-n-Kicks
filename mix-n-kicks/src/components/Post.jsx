import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function Card(props) {
  const params = useParams();
  const shoeCard = props.shoes.find((shoe) => shoe.id === params.id);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (shoeCard) {
      setLikes(shoeCard.fields.likes);
    }
  }, [shoeCard]);

  const pressLike = async (e) => {
    e.preventDefault();
    const fields = { likes: shoeCard.fields.likes + 1 };
    const shoeURL = `${baseURL}/shoes/${params.id}`;
    await axios.patch(shoeURL, { fields }, config);
    props.setToggleFetch((toggleFetch) => !toggleFetch);
  };

  return (
    <section id="postcard-container">
      {shoeCard ? (
        <>
          <h2>{`${shoeCard.fields.name}'s Post`}</h2>
          <button onClick={(e) => pressLike(e)}>Like</button>
          <h3>{likes}</h3>
          <div id="postcard">
            <img
              src={`${shoeCard.fields.image}`}
              alt={`${shoeCard.fields.colorway}`}
            />
            <div id="postcard-info">
              <h3>Username: {shoeCard.fields.name}</h3>
              <hr />
              <h4>Brand: {shoeCard.fields.brand}</h4>
              <h4>Version: {shoeCard.fields.colorway}</h4>
              <h4>Size: {shoeCard.fields.size}</h4>
              <h4>{shoeCard.fields.description}</h4>
            </div>
          </div>
          <h3>Leave a comment</h3>
          <CommentForm setToggleFetch={props.setToggleFetch} shoe={shoeCard} />
          <h3>Comments</h3>
          <div id="comment-section">
            {shoeCard.fields.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </>
      ) : (
        <h4> Loading ... </h4>
      )}
    </section>
  );
}

export default Card;
