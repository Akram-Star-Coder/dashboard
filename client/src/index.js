import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import globalReducer from './state/index';
import {Provider} from 'react-redux';


const store = configureStore({
  reducer : {
    global : globalReducer,  
  }
});



const root = ReactDOM.createRoot(document.getElementById('root'));
//now we have access to the entire state wherever we are 
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
