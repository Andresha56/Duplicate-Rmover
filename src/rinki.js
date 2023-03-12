import React, { useState } from 'react';
import './App.css';


// ---------------- screen 1 ----------------------------

function Screen1({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    if (inputValue.trim().length === 0) {
      alert('Please provide a non-empty value');
      return;
    }

    onSubmit(inputValue);
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



// ---------------- screen 2 ----------------------------


function Screen2({ originalString, newString, onBackClick }) {
  const [characters, setCharacters] = useState([]);

  const handleDelete = (character) => {
    const newCharacters = characters.map((c) => {
      if (c.character === character) {
        return {
          ...c,
          count: 1,
        };
      } else {
        return c;
      }
    });

    setCharacters(newCharacters);
  };

  const renderCards = () => {
    const cards = characters.map((c, index) => {
      const style = {
        backgroundColor: c.color,
      };

      return (
        <div key={index} style={style}>
          <span>{c.character}</span>
          <button onClick={() => handleDelete(c.character)}>X</button>
        </div>
      );
    });

    return <div>{cards}</div>;
  };

  const getCharacters = (string) => {
    const map = new Map();
    for (let i = 0; i < string.length; i++) {
      const char = string.charAt(i);
      if (map.has(char)) {
        const count = map.get(char) + 1;
        map.set(char, count);
      } else {
        map.set(char, 1);
      }
    }

    const characters = [];
    map.forEach((value, key) => {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

      characters.push({
        character: key,
        count: value,
        color: color,
      });
    });

    return characters;
  };

  React.useEffect(() => {
    const characters = getCharacters(originalString);
    setCharacters(characters);
  }, [originalString]);

  const hasDuplicates = characters.some((c) => c.count > 1);

  return (
    <div>
      <h2>Original String: {originalString}</h2>
      <h2>New String: {newString}</h2>
      {renderCards()}
      {hasDuplicates ? (
        <div></div>
      ) : (
        <h2 style={{ color: 'green' }}>Success!</h2>
      )}
      <button onClick={onBackClick}>Back</button>
    </div>
  );
}



// ---------------- App ----------------------------


function App() {
  const [originalString, setOriginalString] = useState('');
  const [newString, setNewString] = useState('');

  const handleScreen1Submit = (inputValue) => {
    setOriginalString(inputValue);
    const newString = inputValue
      .split('')
      .filter((c, index, array) => array.indexOf(c) === index)
      .join('');

    setNewString(newString);
  };

  const handleScreen2BackClick = () => {
    setOriginalString('');
    setNewString('');
  };

  if (originalString === '') {
return <Screen1 onSubmit={handleScreen1Submit} />;
} else {
return (
<Screen2
     originalString={originalString}
     newString={newString}
     onBackClick={handleScreen2BackClick}
   />
);
}
}

export default App;  