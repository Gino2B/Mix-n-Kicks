import axios from "axios";
import { useEffect, useState } from "react";

function Post(props) {
  return (
    <form>
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Image URL"></input>
      <input type="text" placeholder="Shoe Brand"></input>
      <input type="text" placeholder="Colorway"></input>
      <input type="number" placeholder="Size"></input>
      <textarea placeholder="comments"></textarea>
    </form>
  );
}

export default Post;
