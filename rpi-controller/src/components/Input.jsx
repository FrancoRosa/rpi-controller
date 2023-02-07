const Input = ({ title, input, setInput }) => {
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleUp = () => {
    setInput((i) => i + 1);
  };

  const handleDown = () => {
    setInput((i) => i - 1);
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
      <h3 className="is-header">{title}</h3>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          className="button is-primary is-outlined is-rounded is-small"
          onClick={handleUp}
        >
          +
        </button>
        <input
          className="input is-rounded is-small"
          placeholder="0.0"
          type="number"
          value={input}
          onChange={handleInput}
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
