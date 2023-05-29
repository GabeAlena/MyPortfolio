import React from 'react';
import ReactDOM from 'react-dom/client';
/*import { BrowserRouter } from 'react-router-dom'; - doesn't work on gh-pages*/
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
