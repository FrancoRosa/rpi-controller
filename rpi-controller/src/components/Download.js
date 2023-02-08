import {
  faArrowLeft,
  faDownload,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import useLocalStorage from "../js/hooks";
import { useEffect, useState } from "react";
import { checkPendrive, saveRecords } from "../js/api";

const Download = ({ setTab }) => {
  const [input, setInput] = useLocalStorage("file", "heating-curve.csv");
  const [pendrive, setPendrive] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSave = () => {
    setLoading(true);
    saveRecords(input).then((res) => {
      loading(false);
      console.log(res);
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      checkPendrive().then((res) => {
        setPendrive(res.devices.length > 0);
      });
    }, 5000);
    return () => clearInterval(timer);
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
          <FontAwesomeIcon icon={faDownload} />
        </span>
        <span> Download</span>
      </h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="myfile"
        className="input is-rounded has-text-centered"
        type="text"
      />
      {pendrive ? (
        <p className="help has-text-success">Pendrive ready</p>
      ) : (
        <p className="help has-text-danger">No pendrive found</p>
      )}

      <Button
        title="Save"
        color="is-info"
        icon={faSave}
        handler={handleSave}
        disabled={!pendrive}
      />
      <Button
        title="back"
        color="is-info"
        icon={faArrowLeft}
        handler={() => setTab("main")}
      />
    </div>
  );
};
export default Download;
