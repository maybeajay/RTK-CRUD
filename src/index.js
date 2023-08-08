import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { adminApi } from './slices/AdminSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer:{
    [adminApi.reducerPath]: adminApi.reducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(adminApi.middleware)
}
)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

