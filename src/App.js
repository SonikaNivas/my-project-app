// import logo from './logo.svg';
import './App.css';
import Navbar from './Project/Components/Navbar';
import Main from './Project/Components/Main';
// import Book from './Project/Components/Book';
// import Service from './Project/Components/Service';
import { Routes,Route } from 'react-router-dom';
import Login from './Project/Login';
import SignUp from './Project/SignUp';
import Footer from './Project/Components/Footer'


function App() {
  return (
      <>
      <Navbar></Navbar>
      {/* <Book></Book> */}
      <div className='container'>
      <Routes>
        <Route path="" element={<Main/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<SignUp/>}></Route>
        <Route path="/main" element={<Main/>}></Route>
        {/* <Route path="/book" element={<Book/>}></Route> */}
      </Routes>
      </div>
      {/* <Service></Service> */}
      <Footer></Footer>
      
      </>
    
  );
}

export default App;
