import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import News from './components/News/News.jsx'
import Hackthone from './components/Hackthone/hackthone.jsx';
import './index.css';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/news" element={<News/>} />
      <Route path="/hackthone" element={<Hackthone/>} />
    </Routes>
  </BrowserRouter>
)
