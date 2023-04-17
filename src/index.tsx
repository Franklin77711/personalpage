import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './Components/App';
import { ThemeProvider } from './Context/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);
