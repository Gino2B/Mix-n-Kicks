import Rating from "./Rating";

const Comment = (props) => {
  const { name, content, rating } = props.comment.fields;
  return (
    <section id="comments-container">
      <h3>Username: {name}</h3>
      <hr />
      <h5>{content}</h5>
      <Rating rating={rating} />
    </section>
  );
};

export default Comment;
