const Comment = (props) => {
  const { name, content, rating } = props.comment.fields;
  return (
    <section>
      {content} - {name} - {rating}
    </section>
  );
};

export default Comment;
