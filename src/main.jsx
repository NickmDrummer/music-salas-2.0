import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import SecSalas from './pages/SecSalas.jsx';
import SecVerSala from './pages/SecVerSala.jsx';
// Import our custom CSS
import '../src/scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/secsalas',
    element: <SecSalas />,
  },

  {
    path: '/sala/:salaId',
    element: <SecVerSala />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
