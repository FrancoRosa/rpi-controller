import { useState } from "react";
import Calibrate from "./Calibrate";
import Download from "./Download";
import Main from "./Main";

const App = () => {
  const [tab, setTab] = useState("main");
  return (
    <div className="container is-widescreen">
      <Main tab={tab} setTab={setTab} />
      <Calibrate tab={tab} setTab={setTab} />
      <Download tab={tab} setTab={setTab} />
    </div>
  );
};

export default App;
