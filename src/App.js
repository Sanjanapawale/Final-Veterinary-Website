import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Routes/Home/SignUp';
import Home from './Routes/Home/Home';
import About from './Routes/Home/About';
import Service from './Routes/Home/Service';
import Contact from './Routes/Home/Contact';
import ProductsCategory from './Routes/Home/ProductCategory/ProductsCategory';
import Login from './Routes/Home/Login';
import HospitalInfo from './Routes/Home/HospitalInfo';
import Dashboard from './Routes/Admin/Dashboard';
import SignIn from './Routes/Admin/AdminSignIn';
import User from './Routes/Admin/User';
import Report from './Routes/Admin/Report';
import Notification from './Routes/Admin/Notification';
import Establishment from './Routes/Admin/Establishment';
import HospitalForm from './Routes/Admin/HospitalForm';
import DoctorForm from './Routes/Admin/DoctorForm';
import { ToastContainer } from 'react-toastify';
import Profile from './Routes/Doctor/Profile';
import Hospital from './Routes/Doctor/Hospital';
import DReport from './Routes/Doctor/DReport';
import Appointment from './Routes/Doctor/Appointment';
import Password from './Routes/Doctor/Password';
import ViewPatient from './Routes/Doctor/ViewPatient'
import AdminManageHospital from './Routes/Admin/AdminManageHospital';
import Doctors from './Routes/Admin/Doctors';
import DoctorProfileForm from './Routes/Doctor/DoctorProfileForm';
import DoctorAppointmentSlots from './Routes/Doctor/DoctorAppointmentSlots';
import DoctorQualificationForm from './Routes/Doctor/DoctorQualificationForm';
import ClientForm from './Routes/Doctor/ClientForm';
import AvailableSlots from './Routes/Doctor/AvailableSlots';
import DSignUp from './Routes/Doctor/DSignUp';
import DSignIn from './Routes/Doctor/DSignIn';
import VeterinaryProducts from './Routes/Home/ProductCategory/VeterinaryProducts';
import DerivedProducts from './Routes/Home/ProductCategory/DerivedProducts';


function App() {
  // const[showDashbaord, setShowDashboard] = useState(true);
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/productscategory' element={<ProductsCategory/>}></Route>
      <Route path='/hospitalinfo' element={<HospitalInfo/>}></Route>
      <Route path='/adminsignin' element={<SignIn/>}></Route>
      <Route path='/hospitalform' element={<HospitalForm/>}></Route>
      <Route path='/doctorform' element={<DoctorForm/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/establishment' element={<Establishment/>}></Route>
      <Route path='/notification' element={<Notification/>}></Route>
      <Route path='/report' element={<Report/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/dreport' element={<DReport/>}></Route>
      <Route path='/appointment' element={<Appointment/>}></Route>
      <Route path='/hospital' element={<Hospital/>}></Route>
      <Route path='/password' element={<Password/>}></Route>
      <Route path='/viewpatient' element={<ViewPatient/>}></Route>
      <Route path='/doctorprofileform' element={<DoctorProfileForm/>}></Route>
      <Route path='/doctorqualificationform' element={<DoctorQualificationForm/>}></Route>
      <Route path='/doctorappointmentslots' element={<DoctorAppointmentSlots/>}></Route>
      <Route path='/adminmanagehospital' element={<AdminManageHospital/>}></Route>
      <Route path='/doctors' element={<Doctors/>}></Route>
      <Route path='/clientform' element={<ClientForm/>}></Route>
      <Route path='/availableslots' element={<AvailableSlots/>}></Route>
      <Route path='/dsignup' element={<DSignUp/>}></Route>
      <Route path='/dsignin' element={<DSignIn/>}></Route>
      <Route path='/veterinaryproducts' element={<VeterinaryProducts/>}></Route>
      <Route path='/derivedproducts' element={<DerivedProducts/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App;
