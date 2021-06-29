import axios from "axios";
import { useState } from "react";

function Post(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [colorway, setColorway] = useState("");
  const [size, setSize] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      ></input>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      ></input>
      <input
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Shoe Brand"
      ></input>
      <input
        type="text"
        value={colorway}
        onChange={(e) => setColorway(e.target.value)}
        placeholder="Colorway"
      ></input>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.valueAsNumber)}
        placeholder="Size"
      ></input>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="comments"
      ></textarea>
    </form>
  );
}

export default Post;