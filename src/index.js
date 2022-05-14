import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Homepage from './pages/visitors/Homepage';
import Login from './pages/visitors/Login';
import Register from './pages/visitors/Register';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ2TxOwq2yRg8wKsC-mewFSZ4RXUmfFvo",
  authDomain: "runnerexploits.firebaseapp.com",
  projectId: "runnerexploits",
  storageBucket: "runnerexploits.appspot.com",
  messagingSenderId: "667412776456",
  appId: "1:667412776456:web:eb1dd69c901de8ff8973bd",
  measurementId: "G-64TEE9XJH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
