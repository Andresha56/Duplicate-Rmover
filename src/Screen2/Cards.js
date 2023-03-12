import "../Cards.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

function Cards(props) {
  const inputTxt = props.newData;
  const remeoveSpaceText = inputTxt.replace(/\s/g, "");
  const [filterChar, setFilterChar] = useState("");


  const data = Array.from(remeoveSpaceText);
  data.forEach((ele, index) => {
   const a=data.indexOf(ele);
    if (index !== a) {
      console.log(ele)
    }
  });

  const values=['a','h','a','r','a'];
  // -----------reference------------
  //  const values=['a','a','h','a','r','a'];
  // data.map((val)=>{
  // if(values.includes(val)){
  //   console.log(val)
  // }else{
  //   console.log("notmatched")
  // }
  // })


  const handelDel=()=>{
    console.log("clicked")
  }
  return (
    <div className="CardWrapper">
      {data.map((value, index) => {
        return (
          <div className="cards" key={index}>
            {values.includes(value)?(
              <p style={{backgroundColor:'blue',color:"white"}} className="cardVal">{value}</p>
            ):<p style={{backgroundColor:'red',color:"white"}} className="cardVal">{value}</p>}
            <AiOutlineDelete color="red" size={20} onClick={handelDel}/>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
