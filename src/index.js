import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/style.css";
import App from './App';
import { getDatabase } from 'firebase/database';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

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
