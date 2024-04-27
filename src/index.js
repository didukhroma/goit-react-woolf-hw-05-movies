import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//COMPONENTS
import App from 'components/App';
//STYLES
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-woolf-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
