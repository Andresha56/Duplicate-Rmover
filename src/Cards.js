import React, { useState } from 'react';
import './cards.css';


// ---------------- screen 1 ----------------------------

function Screen1({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  // const [noSpaceVal,setNoSpaceVal]=useState(null)
  const handleClick = () => {
    const trimValue = inputValue.trim();
    if (trimValue.length === 0) {
      alert('Please provide a non-empty value');
      return;
    }
    const remeoveSpaceText = trimValue.replace(/\s/g, "")
    onSubmit(inputValue, remeoveSpaceText);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='mainForm'>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}



// ---------------- screen 2 ---------------------------

function Screen2({ originalString, noSpaceString, onBackClick }) {
  console.log(noSpaceString)
  const [characters, setCharacters] = useState([]);
  const [newVal, setNewVal] = useState(null)
  const [showNewStr, setShowStr] = useState(false)
  const [newchar, setnewchar] = useState(Array.from(noSpaceString))

  const handleDelete = (value, color) => {
    const newChar = [];
    for (let i = 0; i < newchar.length; i++) {
      if (newchar[i] !== value || newchar.indexOf(value) === i) {
        newChar.push(newchar[i]);
      }
    }
    setnewchar(newChar);

    const newCharWithColor = newChar.map((char) => {
      return { character: char, color: color };
    });
    setCharacters(newCharWithColor);
    const newValue = newChar.join('');
    setNewVal(newValue);
    setShowStr(true);
  };

  const renderCards = () => {
    const cards = characters.map((c, index) => {
      const style = {
        backgroundColor: c.color,
      };


      return (
        <div key={index} style={style}>
          <span>{c.character}</span>
          <button onClick={() => { handleDelete(c.character, style) }}>X</button>
        </div>
      );
    });
    return <div>{cards}</div>;

  };

  const getCharacters = (string) => {
    //  -------removed-------
    const characters = [];
    Array.from(string).forEach((value) => {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      characters.push({
        character: value,
        color: color,
      });
    });
    return characters;
  };

  React.useEffect(() => {
    const characters = getCharacters(noSpaceString);
    setCharacters(characters);
  }, [noSpaceString]);

  return (
    <div>
      <h2>Original String: {originalString}</h2>
      {
        showNewStr && <h2>New String={newVal}</h2>
      }
      {renderCards()}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
}



// ---------------- App ----------------------------


function App() {
  const [originalString, setOriginalString] = useState('');
  const [noSpaceString, setNoSpaceString] = useState('');
  const [isError, setIsError] = useState(true)

  const handleScreen1Submit = (inputVal, nospaceVal) => {
    const newStr = nospaceVal
    setOriginalString(inputVal);
    setNoSpaceString(newStr);
    setIsError(false)
  };

  const handleScreen2BackClick = () => {
    setIsError(true);
    setNoSpaceString('');
  };

  if (isError === true) {
    return <Screen1 onSubmit={handleScreen1Submit} />;
  } else {
    return (
      <Screen2
        originalString={originalString}
        noSpaceString={noSpaceString}
        onBackClick={handleScreen2BackClick}
      />
    );
  }
}

export default App;

