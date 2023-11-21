// import logo from './logo.svg';
import './App.css';
import Navbar from './Project/Components/Navbar';
import Main from './Project/Components/Main';
import { Routes,Route } from 'react-router-dom';
import Login from './Project/Login';
import SignUp from './Project/SignUp';
import Footer from './Project/Components/Footer'
// import Footer from './Project/Components/Footer';


function App() {
  return (
      <>
      <Navbar></Navbar>
      <div className='container'>
      <Routes>
        <Route path="" element={<Main/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<SignUp/>}></Route>
        <Route path="/main" element={<Main/>}></Route>
      </Routes>
      </div>
      <Footer></Footer>
      
      </>
    
  );
}

export default App;
