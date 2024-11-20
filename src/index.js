import React,{useEffect, useState} from 'react';
import * as ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Authy from './authy';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(

  <React.StrictMode>

        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Authy/>
          </BrowserRouter>
        </QueryClientProvider>

  </React.StrictMode>

);
