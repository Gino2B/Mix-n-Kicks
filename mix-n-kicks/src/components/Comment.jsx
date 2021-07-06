import Rating from "./Rating";
import { baseURL, config } from "../services";
import axios from "axios";

const Comment = (props) => {
  const { name, content, rating } = props.comment.fields;

  const deleteComment = async () => {
    const specificURL = `${baseURL}/comments/${props.comment.id}`;
    await axios.delete(specificURL, config);
    props.setToggleFetch((toggleFetch) => !toggleFetch);
  };

  return (
    <section id="comments-container">
      <h3>Username: {name}</h3>
      <hr />
      <h5>{content}</h5>
      <Rating rating={rating} />
      <button onClick={deleteComment}>X</button>
    </section>
  );
};

export default Comment;
