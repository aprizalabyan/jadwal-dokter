import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Router } from './router';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
    <RouterProvider router={Router} />
  // </React.StrictMode>
);
