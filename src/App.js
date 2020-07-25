import React, { useState } from 'react';
import './App.css'

import './css/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'

//react router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

//firebase


//components
import Home from './pages/Home'

import Header from './layout/Header';
import firebaseConfig from './config/FirebaseConfig';

//init firebase


function App() {



  return (
    <>
      <ToastContainer />


      <Home />

    </>

  );
}

export default App;
