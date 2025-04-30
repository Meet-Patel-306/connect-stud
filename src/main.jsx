import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import NewsPage from "./components/News/NewsPage.jsx";
import News from "./components/News/News.jsx";
import NewsForm from "./components/News/NewsForm.jsx";
import HackathonPage from "./components/Hackathon/HackathonPage.jsx";
import Hackathon from "./components/Hackathon/Hackathon.jsx";
import HackathonForm from "./components/Hackathon/RegisterHackathon/HackathonForm.jsx";
import HackathonBlog from "./components/Hackathon/HackathonBlog.jsx";
import ConnectPage from "./components/Connect/ConnectPage.jsx";
import Connect from "./components/Connect/Connect.jsx";
import Register from "./components/Register/Register.jsx";
import EditProfile from "./components/Register/EditProfile.jsx";
import Login from "./components/Login/Login.jsx";
import Error from "./components/404/Error.jsx";
import Profile from "./components/Profile/Profile.jsx";
import ProfilePage from "./components/Profile/ProfilePage.jsx";
import Message from "./components/Message/Message.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import NewsBlog from "./components/News/NewsBlog.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="news" element={<NewsPage />}>
              <Route index element={<News />} />
              <Route path="post" element={<NewsForm />} />
              <Route path=":id" element={<NewsBlog />} />
            </Route>
            <Route path="hackathon" element={<HackathonPage />}>
              <Route index element={<Hackathon />} />
              <Route path="post" element={<HackathonForm />} />
              <Route path=":id" element={<HackathonBlog />} />
            </Route>
            <Route path="connect" element={<ConnectPage />}>
              <Route index element={<Connect />} />
              <Route path=":id" element={<Message />} />
            </Route>
            <Route path="profile" element={<ProfilePage />}>
              <Route index element={<Profile />} />
              <Route path="edit" element={<EditProfile />} />
              <Route path=":id" element={<Profile />} />
            </Route>
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
