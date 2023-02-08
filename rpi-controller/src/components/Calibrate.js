import {
  faArrowLeft,
  faRuler,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Button from "./Button";

const Calibrate = ({ setTab }) => {
  const [input, setInput] = useState("");
  const handleSave = () => {
    console.log("...save");
  };
  useEffect(() => {
    //Fetch state
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        padding: "0.5em",
        margin: 0,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="title">
        <span className="icon">
          <FontAwesomeIcon icon={faRuler} />
        </span>
        <span> Calibrate</span>
      </h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="f(x)"
        className="input is-rounded has-text-centered"
        type="text"
      />
      <Button title="Save" color="is-info" icon={faSave} handler={handleSave} />
      <Button
        title="back"
        color="is-info"
        icon={faArrowLeft}
        handler={() => setTab("main")}
      />
    </div>
  );
};
export default Calibrate;
