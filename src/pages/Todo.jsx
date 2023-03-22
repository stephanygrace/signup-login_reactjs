import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("token");
        navigate("/");
    };

    return (
        <div>
            <p>Annyeonghaseyo!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Todo;
