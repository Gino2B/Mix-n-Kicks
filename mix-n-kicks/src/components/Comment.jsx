import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";

function Comment(props) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
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
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <h4>Rating</h4>
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
        required
      />
    </form>
  );
}

export default Comment;
