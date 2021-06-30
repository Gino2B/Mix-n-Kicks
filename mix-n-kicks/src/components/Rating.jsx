function Rating(props) {
  let heat = "";
  for (let i = 0; i < props.rating; i += 1) {
    heat += "🔥";
  }
  return <h3>Heat: {heat}</h3>;
}

export default Rating;
