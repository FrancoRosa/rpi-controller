import { useState } from "react";
import Calibrate from "./Calibrate";
import Download from "./Download";
import Main from "./Main";

const App = () => {
  const [tab, setTab] = useState("main");
  return (
    <div className="container is-widescreen">
      {tab === "main" && <Main tab={tab} setTab={setTab} />}
      {tab === "calibrate" && <Calibrate tab={tab} setTab={setTab} />}
      {tab === "download" && <Download tab={tab} setTab={setTab} />}
    </div>
  );
};

export default App;
