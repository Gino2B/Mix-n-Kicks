import { useParams } from "react-router-dom";
import Comment from "./Comment";

function Card(props) {
  const params = useParams();

  const shoeCard = props.shoes.find((shoe) => shoe.id === params.id);
  console.log(shoeCard);
  return (
    <section>
      <h2>{`${shoeCard.fields.name}'s Post`}</h2>
      <img
        src={`${shoeCard.fields.image}`}
        alt={`${shoeCard.fields.colorway}`}
      />
      <h2>{shoeCard.fields.name}</h2>
      <h3>{shoeCard.fields.brand}</h3>
      <h3>{shoeCard.fields.colorway}</h3>
      <h3>{shoeCard.fields.size}</h3>
      <h3>{shoeCard.fields.description}</h3>
      <div>
        {shoeCard.fields.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}

export default Card;
