import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";

function Comment(props) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(3);
  const [comments, setComments] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      name,
      rating,
      comments,
    };

    //MOST LIKELY WILL HAVE TO CHANGE THE URL POSTING TO
    await axios.post(baseURL, { fields: newComment }, config);
    props.setToggleFetch((toggleFetch) => !toggleFetch);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return (
    <form id="comment-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <h4>🔥 Heat Rating 🔥</h4>
      <h5>{rating}</h5>
      <input
        type="range"
        value={rating}
        onChange={(e) => setRating(e.target.valueAsNumber)}
        min={1}
        max={5}
        required
      />
      <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        placeholder="Comments"
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  );
}

export default Comment;
