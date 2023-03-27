import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateTask from "./pages/Todo/CreateTask";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import TodoLists from "./pages/Todo/TodoLists";
import Cookies from "js-cookie";


function App() {
  const [token, setToken] = useState(Cookies.get("token"));

  useEffect(() => {
    console.log("Token", token);
    setToken(Cookies.get("token"));
  }, [token]);

  return (
    <Router>
      <Routes>
        {!token ? (
          <>
            <Route
              exact
              path="/"
              element={<Signin setToken={setToken} />}
            />
            <Route path="/signup" element={<Signup />} />
          </>
        ) : (
          <>
            <Route path="/" element={<CreateTask />} />
            <Route path="/TodoLists" element={<TodoLists />} />
          </>
        )}

      </Routes>
    </Router>
  );
}

export default App;
