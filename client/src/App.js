import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Main } from "./component/Main";
import { Quiz } from "./component/Quiz";
import { Result } from "./component/Result";
import './styles/App.css';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Main/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
