const Input = ({ title, input, setInput, step = 1 }) => {
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleUp = () => {
    setInput((i) => i + step);
  };

  const handleDown = () => {
    setInput((i) => i - step);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 className="">{title}</h3>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="button is-primary is-outlined is-rounded is-small"
          onClick={handleUp}
        >
          +
        </button>
        <input
          className="input is-rounded is-small"
          placeholder="0.0"
          step={step}
          type="number"
          value={input}
          onChange={handleInput}
          style={{ textAlign: "center" }}
        />
        <button
          className="button is-primary is-outlined is-rounded is-small"
          onClick={handleDown}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Input;
