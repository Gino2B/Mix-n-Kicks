const Comment = (props) => {
  const { author, content } = props.comment.fields;
  return (
    <li>
      {content} - {author}
    </li>
  );
};

export default Comment;
