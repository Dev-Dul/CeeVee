import { useState } from "react";
import Validate from "./ErrorHandler";
import ShowError from "./ShowError";

function Buttons(props){
  const [errorMessage, setErrorMessage] = useState(null);
  let errorTimer = null;
  
  function handleNext(){
    const error = Validate(props.name, props.tiTan, props.datahub);

    if(error){
      setErrorMessage(error);
      if(errorTimer) clearTimeout(errorTimer);

      errorTimer = setTimeout(() => {
        setErrorMessage(null);
      }, 3500);

    }else{
      setErrorMessage(null);
      props.next();
    }
  }

  if(props.name === "first"){
    return (
      <div className="btns first">
        {errorMessage && <ShowError msg={errorMessage} />}
        <button onClick={handleNext}>Next</button>
      </div>
    );
  }else if(props.name === "sixth"){
    return(
      <div className="buttons">
        {errorMessage && <ShowError msg={errorMessage} />}
        <button onClick={props.handle}>EDIT</button>
        <button onClick={props.download}>Download</button>
      </div>
    );
  }

  return(
    <div className="buttons">
      {errorMessage && <ShowError msg={errorMessage} />}
      <button onClick={props.back}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}


export default Buttons;