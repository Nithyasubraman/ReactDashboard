// import { Route } from '@mui/icons-material';
import './App.css';
import Dashboard from './Components/DashboardModule/Dashboard';
import Signup from './Components/SignupModule/Signup';
import Navbar from './Components/NavbarModule/Navbar';
import Home from './Components/HomeModule/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Components/ProfileModule/Profile';
import Login from './Components/Login Module/Login';
//import { Home } from '@mui/icons-material';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='Dashboard' element={<Dashboard/>} />
        <Route path='Signup' element={<Signup/>} />
        <Route path='Navbar' element={<Navbar/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Profile' element={<Profile/>}/>
        <Route path='Login' element={<Login/>}/>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
