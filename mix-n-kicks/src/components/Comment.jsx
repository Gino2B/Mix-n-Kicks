import Rating from "./Rating";

const Comment = (props) => {
  const { name, content, rating } = props.comment.fields;
  return (
    <section id="comments-container">
      <h3>{name}</h3>
      <hr />
      <h3>{content}</h3>
      <Rating rating={rating} />
    </section>
  );
};

export default Comment;
