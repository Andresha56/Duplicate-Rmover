import React, { useState } from "react";
import "./Form.css";
import {Link} from "react-router-dom";
import Cards from "./Cards";

function Form() {
  const[inputVal, setInputValue] = useState("");
  const[isEroor,setIsError]=useState(true)
  const[errorMsg,steErrorMsg]=useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if(!inputVal){
        steErrorMsg("please provide a non-empty value")
    }
    else if(inputVal.replace(/\s/g,"").length<=0){
        steErrorMsg("White spaces are not allowed!!")
    }
    else if(inputVal.length < 4){
        steErrorMsg("please  enter atleast 4 characters ")
    }
    else{
        setIsError(false);
       <Cards filterInputData={inputVal}/>
      
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
        {isEroor ?<button type="submit">Submit</button>:<Link to="/cards"><button type="submit">Submit</button></Link>}
      </div>
    </form>
  );
}

export default Form;
