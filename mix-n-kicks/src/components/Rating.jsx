function Rating(props) {
  let heat = "";
  for (let i = 0; i < props.rating; i += 1) {
    heat += "🔥";
  }
  return <p>Heat: {heat}</p>;
}

export default Rating;
