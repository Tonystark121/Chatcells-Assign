const dateFormatter = (value) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(value).toLocaleDateString("en-US", options);
  console.log(date)
  return date
};

export default dateFormatter;
