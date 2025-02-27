

function Buttons({ name, next, back }) {
  if (name === "first") {
    return (
      <div className="btns first">
        <button onClick={next}>Next</button>
      </div>
    );
  }

  return (
    <div className="buttons">
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
}


export default Buttons;