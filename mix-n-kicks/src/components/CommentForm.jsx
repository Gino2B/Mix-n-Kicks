import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";

function Comment(props) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(3);
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      name,
      rating,
      content,
      posts: [props.shoe.id],
    };

    await axios.post(`${baseURL}/comments`, { fields: newComment }, config);
    props.setToggleFetch((toggleFetch) => !toggleFetch);
  };

  return (
    <form id="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <h4>🔥 Heat Rating : {rating} 🔥</h4>
      <input
        type="range"
        value={rating}
        onChange={(e) => setRating(e.target.valueAsNumber)}
        min={1}
        max={5}
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Comments"
        maxLength={200}
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  );
}

export default Comment;
