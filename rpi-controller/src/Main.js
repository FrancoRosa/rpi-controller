const Main = () => {
  return (
    <div className="columns" style={{ height: "100vh" }}>
      <div
        className="column is-one-quarter"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <button className="button is-success is-outlined is-rounded">
            Start
          </button>
          <button className="button is-danger is-outlined is-rounded">
            Stop
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <button className="button is-info is-outlined is-rounded">
            Download
          </button>
          <button className="button is-info is-outlined is-rounded">
            Calibrate
          </button>
        </div>
      </div>
      <div className="column" style={{ height: "100%" }}>
        <div>
          <button className="button is-success is-outlined is-rounded">
            Start
          </button>
          <button className="button is-danger is-outlined is-rounded">
            Stop
          </button>
        </div>
        <div>
          <button className="button is-info is-outlined is-rounded">
            Download
          </button>
          <button className="button is-info is-outlined is-rounded">
            Calibrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
