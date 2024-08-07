import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import AppRoutes from './components/AppRoutes';
import reportWebVitals from './reportWebVitals';

// Periksa apakah elemen dengan ID 'root' ditemukan
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
  );
} else {
  console.error("Error: Target container is not a DOM element.");
}

reportWebVitals();
