import {
  faDownload,
  faPlay,
  faRuler,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { socket, startControl, stopControl } from "../js/api";
import useLocalStorage from "../js/hooks";
import Button from "./Button";
import Graphics from "./Graphics";
import Input from "./Input";

const Main = ({ setTab }) => {
  const [time, setTime] = useLocalStorage("time", 0);
  const [target, setTarget] = useLocalStorage("target", 0);
  const startHandler = (time, setpoint) => {
    startControl(time, setpoint);
  };

  const stopHandler = (time, setpoint) => {
    stopControl(time, setpoint);
  };

  useEffect(() => {
    socket.on("message", (msg) => {
      console.log(msg);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div
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
          width: "17vw",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Button
            title="Start"
            handler={startHandler}
            icon={faPlay}
            color="is-success"
          />
          <Button
            title="Stop"
            handler={stopHandler}
            icon={faStop}
            color="is-danger"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Button
            title="Calibrate"
            handler={() => setTab("calibrate")}
            icon={faRuler}
            color="is-info"
          />

          <Button
            title="Download"
            handler={() => setTab("download")}
            icon={faDownload}
            color="is-info"
          />
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
        <div style={{ display: "flex", gap: "2rem", padding: "0 1em" }}>
          <Input
            title="Target (°C)"
            input={target}
            setInput={setTarget}
            step={0.1}
          />
          <Input title="Time (s)" input={time} setInput={setTime} />
        </div>
      </div>
    </div>
  );
};

export default Main;
