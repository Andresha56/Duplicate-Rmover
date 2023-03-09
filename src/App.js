
import './App.css';
import Form from './Form';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from './Cards';
import { useState } from 'react';

function App() {
  const [inputData, setInputDatas] = useState("")
  const filterInputData = value => {
    setInputDatas(value)
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Form getFilterInputDatas={filterInputData} />
          }></Route>
          <Route path='/cards' element={<Cards newData={inputData} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
