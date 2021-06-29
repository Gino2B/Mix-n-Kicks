// import { baseURL, config } from "../services";

function Shoes(props) {
  return (
    <article class="shoes">
      <img
        src={`${props.shoe.fields.image}`}
        alt={`${props.shoe.fields.colorway}`}
      />
      <h2>
        {props.shoe.fields.brand} {props.shoe.fields.colorway}
      </h2>
    </article>
  );
}

export default Shoes;
