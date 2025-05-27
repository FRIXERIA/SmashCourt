import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Main from "./components/Main/Main";
import { Navigate } from "react-router-dom";
import { Context } from "./context/Context";
function App() {
  const { token } = useContext(Context);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
