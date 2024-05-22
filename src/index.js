import React,{useEffect, useState} from 'react';
import * as ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import Authy from './authy';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(

  <React.StrictMode>

      <BrowserRouter>

          <Authy/>
          
          {/* <App /> */}

      </BrowserRouter>

  </React.StrictMode>

);
