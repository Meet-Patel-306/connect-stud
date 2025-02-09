import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import News from "./components/News/News.jsx";
import Hackthone from "./components/Hackthone/Hackthone.jsx";
import Connect from "./components/Connect/Connect.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news" element={<News />} />
        <Route path="/hackthone" element={<Hackthone />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
