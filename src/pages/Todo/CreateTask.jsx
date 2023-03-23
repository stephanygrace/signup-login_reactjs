// import Cookies from "js-cookie";
import React from "react";
// import { useNavigate } from "react-router-dom";

const Todo = () => {
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     Cookies.remove("token");
    //     navigate("/");
    // };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title text-center">New Task</h3>

                    <div className="form-group mt-3">
                        <label>Task</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Create Project Schedule"
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label> Assignee </label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Tepong"
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label> Due Date </label>
                        <input type="date" className="form-control mt-1 date" />
                    </div>

                    <div className=""></div>

                    {/* <button onClick={handleLogout}>Logout</button> */}
                </div>
            </form>
        </div>
    );
};

export default Todo;
