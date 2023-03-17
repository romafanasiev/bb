import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './main.css';

if (import.meta.env.DEV) {
  import('react-axe').then((axe) => {
    axe.default(React, ReactDOM, 1000);
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });
} else {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
