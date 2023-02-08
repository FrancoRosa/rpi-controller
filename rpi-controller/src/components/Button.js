import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ title, handler, icon, color, disabled = false }) => {
  return (
    <button
      className={"button is-small is-outlined is-rounded " + color}
      disabled={disabled}
      onClick={handler}
    >
      <span className="icon">{icon && <FontAwesomeIcon icon={icon} />}</span>
      <span>{title}</span>
    </button>
  );
};
export default Button;
