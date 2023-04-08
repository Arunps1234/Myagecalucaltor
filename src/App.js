import logo from './logo.svg';
import './App.css';
import Age from './Components/Age1';
import Age11 from './Components/Age11';
import Login from './Components/login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  
  


  return (
    <div className="App">
{/*<Age/> */} 
{/*<Login/>/*}
{/*<Age11/> */}

< BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>} ></Route>
  <Route path="/Home" element={<Age11/>}></Route>
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
