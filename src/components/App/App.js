import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
      <div className="app">
          <Header />
          <Routes>
              <Route path="/" exact element={
                <Main />
              }/>
              <Route path="/login" element={
                <Login />
              }/>
              <Route path="/register" element={
                <Register />
              }/>
          </Routes>
          <Footer />
      </div>  
  );
}

export default App;
