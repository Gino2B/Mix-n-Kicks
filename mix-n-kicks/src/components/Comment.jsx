const Comment = (props) => {
  const { name, content, rating } = props.comment.fields;
  return (
    <li>
      {content} - {name} - {rating}
    </li>
  );
};

export default Comment;
