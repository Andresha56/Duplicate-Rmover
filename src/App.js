
// import './App.css';
// import Form from './Screen1/Form';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cards from './Screen2/Cards';
import './ayan.css'
// import { useState } from 'react';
import Rinki from './Rinki';

function App() {
  // const [inputData, setInputDatas] = useState("")
  // const filterInputData = value => {
  //   setInputDatas(value)
  // }
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Form getFilterInputDatas={filterInputData} />
          }></Route>
          <Route path='/cards' element={<Cards newData={inputData} />}></Route>
        </Routes>
      </BrowserRouter>
      <rinki/> */}
      <Rinki/>
      
    </>
  );
}

export default App;
