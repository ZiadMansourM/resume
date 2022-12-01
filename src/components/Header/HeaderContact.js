import classes from "./HeaderContact.module.css";
function HeaderContact(props) {
  return (
    <div>
      {props.link && (
        <a href={props.data} className={classes.anchor}>
          {props.data}
        </a>
      )}
      {!props.link && props.data}
      <img src={props.image}></img>
    </div>
  );
}
export default HeaderContact;
