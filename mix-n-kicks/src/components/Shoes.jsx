// import { baseURL, config } from "../services";
import { Link } from "react-router-dom";

function Shoes(props) {
  return (
    <section className="shoes">
      <Link to={`/posts/${props.shoe.id}`}>
        <img
          src={`${props.shoe.fields.image}`}
          alt={`${props.shoe.fields.colorway}`}
        />
        <div className="shoe-name">
          <h2>
            {props.shoe.fields.brand} {props.shoe.fields.colorway}
          </h2>
        </div>
      </Link>
    </section>
  );
}

export default Shoes;
