
import './App.css';
import Form from './Form';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from './Cards';

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
