
import './App.css';
import Form from './Screen1/Form';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from './Screen2/Cards';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Form />}></Route>
          <Route path='/cards' element={ <Cards />}></Route>
        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;
