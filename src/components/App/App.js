import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NavigationSidebar from '../Navigation/NavigationSidebar/NavigationSidebar';
import NotFound from '../NotFound/NotFound';
import Account from '../Account/Account';
import Portfolio from '../Portfolio/Portfolio';

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
                <Route path="/*" element={
                  <NotFound />
                } />
                <Route path="/account" element={
                  <Account />
                }/>
                <Route path="/portfolio" element={
                  <Portfolio />
                }/>
            </Routes>
            <Footer />
        </div>  
    );
}

export default App;
