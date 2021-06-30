import Rating from "./Rating";

const Comment = (props) => {
  const { name, content, rating } = props.comment.fields;
  return (
    <section>
      {content} - {name} -
      <Rating rating={rating} />
    </section>
  );
};

export default Comment;
