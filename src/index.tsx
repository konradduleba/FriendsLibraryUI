import React from 'react';
import AppRoutesHandler from 'Routes/Handler';
import ReactDOM from 'react-dom';
import { UseToken } from 'Context/Token';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UseToken>
      <AppRoutesHandler />
    </UseToken>
  </React.StrictMode>,
  document.getElementById('root')
);
