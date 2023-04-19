import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getDatabase } from 'firebase/database';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAayKAL-DL5tZCiw1eOtoYIHLHjmhXXurA",
  authDomain: "the-fab-five-5ede8.firebaseapp.com",
  projectId: "the-fab-five-5ede8",
  storageBucket: "the-fab-five-5ede8.appspot.com",
  messagingSenderId: "309262352474",
  appId: "1:309262352474:web:3daf3fe063ee2783f91863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);