import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import News from "./components/News/News.jsx";
import Hackathon from "./components/Hackathon/Hackathon.jsx";
import Connect from "./components/Connect/Connect.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news" element={<News />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  </Provider>
);
