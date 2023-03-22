import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
  

    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            let url;
            let data;

            url = "http://localhost/Stelle/php-auth-api/register.php";
            data = { name, email, password };

            const response = await axios.post(url, data);
            console.log(response.data);

            // If the response indicates a successful login or registration
            if (response.data.success) {
                // Redirect the user to the dashboard page
                navigate("/");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleFormSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign up</h3>
                    <div className="text-center">
                        {" "}
                        Not registered yet?{" "}
                        <Link className="link-primary" to={"/"}>
                            {" "}
                            Sign In{" "}
                        </Link>
                    </div>

                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Sign up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
