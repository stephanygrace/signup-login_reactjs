import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateTask from "./pages/Todo/CreateTask";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import TodoLists from "./pages/Todo/TodoLists";
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
                        <Route path="/CreateTask" element={<CreateTask />} />
                        <Route path="/TodoLists" element={<TodoLists />} />
                    </>
                )}
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );

}

export default App;
