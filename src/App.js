import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Routes/SignUp';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import Login from './Routes/Login';
import HospitalInfo from './Routes/HospitalInfo';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/hospitalinfo' element={<HospitalInfo/>}></Route>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
