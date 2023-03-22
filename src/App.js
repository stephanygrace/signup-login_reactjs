import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./pages/Todo";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function App() {
    const [isAuthenticated, setisAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get("token");
        console.log("Token", token);

        if (token) {
            setisAuthenticated(true);
        }
    }, []);

    return (
        <Router>
          <Routes>
            {!isAuthenticated ? (
              <>
                <Route exact path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
              </>
            ) : (
              <>
                <Route path="/todo" element={<Todo />} />
              </>
            )}
            <Route path="*" element={<UnauthorizedAccess />} />
          </Routes>
        </Router>
      );
                
      function UnauthorizedAccess() {
        return <h1>Unauthorized access</h1>;
      }
      
}

export default App;
