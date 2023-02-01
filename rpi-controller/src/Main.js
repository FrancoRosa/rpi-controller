import { useState } from "react";
import Graphics from "./Graphics";
import Input from "./Input";

const Main = () => {
  const [time, setTime] = useState(0);
  const [target, setTarget] = useState(0);
  return (
    <div
      className=""
      style={{
        height: "100vh",
        padding: "0.5em",
        margin: 0,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className=""
        style={{
          width: "15vw",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <button className="button is-small is-success is-outlined is-rounded">
            Start
          </button>
          <button className="button  is-small is-danger is-outlined is-rounded">
            Stop
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <button className="button is-small is-info is-outlined is-rounded">
            Calibrate
          </button>
          <button className="button is-small is-info is-outlined is-rounded">
            Download
          </button>
        </div>
      </div>
      <div
        className=""
        style={{
          width: "80vw",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Graphics />
        <div style={{ display: "flex", gap: "2rem" }}>
          <Input title="SetPoint" input={target} setInput={setTarget} />
          <Input title="Time" input={time} setInput={setTime} />
        </div>
      </div>
    </div>
  );
};

export default Main;
