function Rating(props) {
  let heat = "";
  for (let i = 0; i < props.rating; i += 1) {
    heat += "🔥";
  }
  return <h5>Heat: {heat}</h5>;
}

export default Rating;
