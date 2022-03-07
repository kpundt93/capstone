import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

