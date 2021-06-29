import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";

function Post(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [colorway, setColorway] = useState("");
  const [size, setSize] = useState(0);
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newShoe = {
      name,
      image,
      brand,
      colorway,
      size,
      description,
    };
    await axios.post(baseURL, { fields: newShoe }, config);
    props.setToggleFetch((toggleFetch) => !toggleFetch);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <input
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Shoe Brand"
      />
      <input
        type="text"
        value={colorway}
        onChange={(e) => setColorway(e.target.value)}
        placeholder="Colorway"
      />
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.valueAsNumber)}
        placeholder="Size"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="comments"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default Post;
