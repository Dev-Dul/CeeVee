import { useState } from "react";
import Validate from "./ErrorHandler";
import ShowError from "./ShowError";

function Buttons({ name, next, back, tiTan, datahub }){
  const [errorMessage, setErrorMessage] = useState(null);
  let errorTimer = null;
  
  function handleNext(){
    const error = Validate(name, tiTan, datahub);

    if(error){
      setErrorMessage(error);
      if(errorTimer) clearTimeout(errorTimer);

      errorTimer = setTimeout(() => {
        setErrorMessage(null);
      }, 3500);

    }else{
      setErrorMessage(null);
      next();
    }
  }

  if(name === "first"){
    return (
      <div className="btns first">
        {errorMessage && <ShowError msg={errorMessage} />}
        <button onClick={handleNext}>Next</button>
      </div>
    );
  }

  return(
    <div className="buttons">
      {errorMessage && <ShowError msg={errorMessage} />}
      <button onClick={back}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}


export default Buttons;