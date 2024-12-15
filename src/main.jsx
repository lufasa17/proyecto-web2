import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import './index.css'*/
import App from './App.jsx'
import Principal from './Principal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Principal></Principal>
  </BrowserRouter>,
)
