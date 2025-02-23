function Buttons({ name }) {
  if (name === "first") {
    return (
      <div className="buttons first">
        <button>Next</button>
      </div>
    );
  }

  return (
    <div className="buttons">
      <button>Back</button>
      <button>Next</button>
    </div>
  );
}
