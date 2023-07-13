import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Registration from "./Register";
import Login from "./Login";
import { ToastContainer } from "react-toastify";
import AppHeader from "./AppHeader";
import Customer from "./Customer";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
