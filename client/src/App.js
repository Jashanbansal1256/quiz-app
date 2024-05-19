import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Main } from "./component/Main";
import { Quiz } from "./component/Quiz";
import { Result } from "./component/Result";
import { CheckUserExit } from './helper/helper';
import './styles/App.css';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Main/>}/>
      <Route path='/quiz' element={<CheckUserExit><Quiz/></CheckUserExit>}/>
      <Route path='/result' element={<CheckUserExit><Result/></CheckUserExit>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
