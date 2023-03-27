import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Error from "../Error";
// import { useNavigate } from "react-router-dom";

const CreateTask = () => {
    const [token, setToken] = useState(false);

    useEffect(() => {
        console.log("Token", token);
        setToken(Cookies.get("token"));
    }, [token]);

    return (
        <>
            {token ? (
                <>
                    <div className="Auth-form-container">
                        <form className="Auth-form">
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title text-center">
                                    New Task
                                </h3>
                                <div className="form-group mt-3">
                                    <label>Task</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="e.g Create Project Schedule"
                                    />
                                </div>
                                <div className=""></div>
                                {/* <button onClick={handleLogout}>Logout</button> */}
                            </div>
                        </form>
                    </div>
                    ;
                </>
            ) : (
                <Error />
            )}
        </>
    );
};

export default CreateTask;
