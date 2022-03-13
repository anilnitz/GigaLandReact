import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Frontend from './layout/Frontend';
import Backend from './layout/Backend';
import Home from './pages/Home';
import Dashboard from './pages/Backend/Dashboard';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Setting from './pages/Backend/Setting';
import Login from './pages/Login';
import Activity from "./pages/Activity";
import Author from "./pages/Author";
import Register from "./pages/Register";
import Wallet from "./pages/Wallet";
import Explore from "./pages/Explore";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Frontend />}>
          <Route index element={<Home />} />
          <Route path="activity" element={<Activity/>} />
          <Route path="author" element={<Author/>} />
          <Route path="login" element={<Login/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="register" element={<Register/>} />
          <Route path="wallet" element={<Wallet/>} />
          <Route path="explore" element={<Explore/>} />
        </Route>
        <Route path='/admin' element={<Backend />}>
          <Route index element={<Dashboard />} />
          <Route path='setting' element={<Setting />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
