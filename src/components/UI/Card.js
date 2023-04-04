import "../UI/Card.css";
function Card(props) {
  const classes = "card " + props.className;
  // your wraper component must take className
  // so you can add const which take classNmae along with the default classNmae of card
  return <div className={classes}>{props.children}</div>;
  //   children is a reserved props and the value of the chidrn prop is
  // always the content between the opening and closing tag of that wrapper card tag
}
export default Card;
