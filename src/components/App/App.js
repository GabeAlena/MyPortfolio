import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NavigationSidebar from '../Navigation/NavigationSidebar/NavigationSidebar';

function App() {
    const [sidebar, setSidebar] = useState(false);

    const handleOpenMenu = () => {
        setSidebar(!sidebar);
    }

    return (
        <div className="app">
            <Header 
                handleOpenMenu={handleOpenMenu}
            />
            <NavigationSidebar 
                sidebar={sidebar}
                handleOpenMenu={handleOpenMenu}
            />
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
