import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import NewsPage from "./components/News/NewsPage.jsx";
import HackathonPage from "./components/Hackathon/HackathonPage.jsx";
import News from "./components/News/News.jsx";
import Hackathon from "./components/Hackathon/Hackathon.jsx";
import HackathonForm from "./components/Hackathon/RegisterHackathon/HackathonForm.jsx";
import HackthoneBlog from "./components/Hackathon/HackathonBlog.jsx";
import Connect from "./components/Connect/Connect.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import Error from "./components/404/error.jsx";
import Profile from "./components/Profile/Profile.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="news" element={<NewsPage />}>
              <Route index element={<News />} />
            </Route>
            <Route path="hackathon" element={<HackathonPage />}>
              <Route index element={<Hackathon />} />
              <Route path="post" element={<HackathonForm />} />
              <Route path=":id" element={<HackthoneBlog />} />
            </Route>
            <Route path="connect" element={<Connect />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={3000} />
    </Provider>
  </StrictMode>
);
