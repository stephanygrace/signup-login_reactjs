import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppHeader from "./AppHeader";
import Customer from "./Customer";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center" />
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
