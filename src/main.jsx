import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import './index.css'
import { store } from '../rtk/appStore/store.js'
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from "redux-persist"
let persistor = persistStore(store);




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
  <React.StrictMode>
    <App />
    <ToastContainer
          position="top-center"
          autoClose={900}
          limit={1}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
        />
  </React.StrictMode>
  </PersistGate>
  </Provider>
)
