

function Buttons({ name, next }) {
  if (name === "first") {
    return (
      <div className="btns first">
        <button onClick={next}>Next</button>
      </div>
    );
  }

  return (
    <div className="buttons">
      <button>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
}


export default Buttons;