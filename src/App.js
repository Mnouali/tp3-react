import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
// import Join from './Projet/pages/Join';
// import Navabr from './Projet/pages/navabr';
import Form from './todList/form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
       {/* <h1>hh</h1>
       <Routes>
       
            <Route path='/' element={ <Navabr/>}></Route>
            <Route path='join' element={<Join/>}/>
       </Routes>
  */}
  <Form/>
    </BrowserRouter>
  );
}

export default App;
