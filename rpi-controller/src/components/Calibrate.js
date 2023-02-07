const Calibrate = ({ tab, setTab }) => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "0.5em",
        margin: 0,
        display: tab === "calibrate" ? "flex" : "none",
        justifyContent: "space-between",
      }}
    >
      <h1 className="title">"Calibrate"</h1>
      <button className="button" onClick={() => setTab("main")}>
        Back
      </button>
    </div>
  );
};
export default Calibrate;
