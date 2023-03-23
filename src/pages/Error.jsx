import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/");
    };

    return (
        <div className="Auth-form-container">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">ERROR 401</h3>
                <div className="form-group mt-3">
                    <p>Authorization Required</p>
                    <br></br>
                    <div className="d-grid gap-2 mt-3">
                        <button
                            onClick={handleLogin}
                            className="btn btn-primary">
                            {" "}
                            LOG IN{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
