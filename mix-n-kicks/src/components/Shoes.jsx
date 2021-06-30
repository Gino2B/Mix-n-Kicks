// import { baseURL, config } from "../services";

function Shoes(props) {
  return (
    <section class="shoes">
      <img
        src={`${props.shoe.fields.image}`}
        alt={`${props.shoe.fields.colorway}`}
      />
      <div class="shoe-name">
        <h2>
          {props.shoe.fields.brand} {props.shoe.fields.colorway}
        </h2>
      </div>
    </section>
  );
}

export default Shoes;
