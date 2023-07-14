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
      {/* Toast container for notifications */}
      <ToastContainer theme="colored" position="top-center" />

      {/* Routing using BrowserRouter */}
      <BrowserRouter>
        {/* App header */}
        <AppHeader />

        {/* Routes for different URLs */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home component */}
          <Route path="/login" element={<Login />} /> {/* Login component */}
          <Route path="/register" element={<Register />} />{" "}
          {/* Register component */}
          <Route path="/customer" element={<Customer />} />{" "}
          {/* Customer component */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
