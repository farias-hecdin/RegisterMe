import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./base.css";
import MainLayout from "./pages/mainpage/MainLayout.jsx";
import UserData from "./context/user/userProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserData>
      <MainLayout />
    </UserData>
  </React.StrictMode>
);
