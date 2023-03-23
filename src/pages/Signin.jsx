import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Signin = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("token");
        console.log("Token", token);

        if (token) {
            navigate("/todo");
        }
    }, );

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            let url;
            let data;

            url = "http://localhost/Stelle/php-auth-api/login.php";
            data = { email, password };

            const response = await axios.post(url, data);
            console.log(response.data);

            // If the response indicates a successful login or registration
            if (response.data.success) {
                // Redirect the user to the dashboard page
                const expirationTime = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from last accessed

                Cookies.set("token", response.data.token, {
                    expires: expirationTime,
                    sameSite: "Lax",
                });
                navigate("/TodoLists");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleFormSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign in</h3>
                    <div className="text-center">
                        {" "}
                        Not registered yet?{" "}
                        <Link className="link-primary" to={"/Signup"}>
                            {" "}
                            Sign Up{" "}
                        </Link>
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
                            Sign in
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signin;
