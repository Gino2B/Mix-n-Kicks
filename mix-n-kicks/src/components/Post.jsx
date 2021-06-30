import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function Card(props) {
  const params = useParams();

  const shoeCard = props.shoes.find((shoe) => shoe.id === params.id);
  console.log(shoeCard);
  return (
    <section id="postcard-container">
      <h2>{`${shoeCard.fields.name}'s Post`}</h2>
      <div id="postcard">
        <img
          src={`${shoeCard.fields.image}`}
          alt={`${shoeCard.fields.colorway}`}
        />
        <div id="postcard-info">
          <h3>{shoeCard.fields.name}</h3>
          <h4>{shoeCard.fields.brand}</h4>
          <h4>{shoeCard.fields.colorway}</h4>
          <h4>{shoeCard.fields.size}</h4>
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
    </section>
  );
}

export default Card;
