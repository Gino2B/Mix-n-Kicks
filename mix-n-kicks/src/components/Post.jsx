import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function Card(props) {
  const params = useParams();
  const shoeCard = props.shoes.find((shoe) => shoe.id === params.id);

  return (
    <section id="postcard-container">
      {shoeCard ? (
        <div>
          <h2>{`${shoeCard.fields.name}'s Post`}</h2>
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
        </div>
      ) : (
        <h4> Loading ... </h4>
      )}
    </section>
  );
}

export default Card;
