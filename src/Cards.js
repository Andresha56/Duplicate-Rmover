import "./Cards.css";
import { AiOutlineDelete } from "react-icons/ai";
function Cards(props) {
  const inputTxt = props.newData;
  const remeoveSpaceText = inputTxt.replace(/\s/g, "");

  const data = Array.from(remeoveSpaceText);
  return (
    <div className="CardWrapper">
      {data.map((value, index) => {
        return (
          <div className="cards" key={index}>
            <p className="cardVal">{value}</p>
            <AiOutlineDelete color="red" size={20} />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
