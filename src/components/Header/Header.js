import classes from "./Header.module.css";
import email from "../../assets/email.png";
import phone from "../../assets/cell-phone.png";
import gps from "../../assets/placeholder.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

function Header(props) {
  return (
    <div className={classes["header"]}>
      <div className={classes["header-photo"]}>
        <img
          src={props.data.photo}
          className={classes["header-photo-photo"]}
        ></img>
      </div>
      <div className={classes["header-info"]}>
        <div className={classes["header-info-name"]}>{props.data.name}</div>
        <p className={classes["header-info-description"]}>
          {props.data.description}
        </p>
      </div>
      <div className={classes["header-contacts"]}>
        {props.data.contacts.mail && (
          <div>
            <a style={{ textDecoration: 'none', color: 'inherit' }} href={`mailto:${props.data.contacts.mail}`} target="_blank" rel="noopener noreferrer">
            {props.data.contacts.mail}
            </a>
            <img src={email}></img>
          </div>
        )}
        {props.data.contacts.phone && (
          <div>
            <a style={{ textDecoration: 'none', color: 'inherit' }} href={`https://wa.me/20${props.data.contacts.phone}`} target="_blank" rel="noopener noreferrer">
            {props.data.contacts.phone}
            </a>
            <img src={phone}></img>
          </div>
        )}
        {props.data.contacts.accomodation && (
          <div>
            {props.data.contacts.accomodation}
            <img src={gps}></img>
          </div>
        )}
        {props.data.contacts.linkedin && (
          <div>
            <a style={{ textDecoration: 'none', color: 'inherit' }} href={`https://www.${props.data.contacts.linkedin}`} target="_blank" rel="noopener noreferrer">
              {props.data.contacts.linkedin}
              <img src={linkedin}></img>
            </a>
          </div>
        )}
        {props.data.contacts.github && (
          <div>
            <a style={{ textDecoration: 'none', color: 'inherit' }} href={`https://www.${props.data.contacts.github}`} target="_blank" rel="noopener noreferrer">
              {props.data.contacts.github}
              <img src={github}></img>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;