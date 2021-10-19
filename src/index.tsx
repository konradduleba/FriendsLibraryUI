import React from 'react';
import AppRoutesHandler from 'Routes/Handler';
import ReactDOM from 'react-dom';
import { UseToken } from 'Context/Token';
import './index.css';
import { UseUserData } from 'Context/UserData';

ReactDOM.render(
  <React.StrictMode>
    <UseToken>
      <UseUserData>
        <AppRoutesHandler />
      </UseUserData>
    </UseToken>
  </React.StrictMode>,
  document.getElementById('root')
);
