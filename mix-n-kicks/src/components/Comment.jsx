const Comment = (props) => {
  const { name, content } = props.comment.fields;
  return (
    <li>
      {content} - {name}
    </li>
  );
};

export default Comment;
