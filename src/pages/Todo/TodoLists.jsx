import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useState, useEffect } from "react";

const TodoLists = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("token");
        navigate("/");
    };
  
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost/Stelle/php-todoapp-api/getTasks.php")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    
        return (
            <div className="Auth-form-container">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title text-center">Todo List</h3>

                    <table className="my-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.task}</td>
                              
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleLogout} className="btn-logout">Logout</button>
                </div>
            </div>
        );
    }

export default TodoLists;
