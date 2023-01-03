import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './styles.css'
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<BrowserRouter>
    	<App />
		</BrowserRouter>
  </React.StrictMode>,
);
