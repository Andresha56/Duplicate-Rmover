import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [inputVal, setInputValue] = useState("");
  const[isEroor,setIsError]=useState(false)
  const[errorMsg,steErrorMsg]=useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if(!inputVal){
        setIsError(true)
        steErrorMsg("please provide a non-empty value")
    }
    else if(inputVal.replace(/\s/g,"").length<=0){
        setIsError(true)
        steErrorMsg("White spaces are not allowed!!")
    }
    else if(inputVal.length<4){
        setIsError(true)
        steErrorMsg("please  enter atleast 4 characters ")
    }
    else{
        console.log("submited")
        setIsError(false)
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className="form__container">
        <input
          type="text"
          autoComplete="off"
          placeholder="enter your text"
          name="text"
          value={inputVal}
          onChange={e=>setInputValue(e.target.value)}
        />
        <div className="errorCon">{isEroor && <p className="error">{errorMsg}</p>}</div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
