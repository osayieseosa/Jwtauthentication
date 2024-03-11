import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/AppProvider';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App/>}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
