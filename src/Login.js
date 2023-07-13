import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, usernameUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  });

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          if (Object.keys(response).length === 0) {
            toast.error("Please Enter Valid username");
          } else {
            if (response.pass === password) {
              toast.success("Login Success");
              sessionStorage.setItem("username", username);
              navigate("/");
            } else {
              toast.error("Please Enter Valid Credentials");
            }
          }
        })
        .catch((err) => {
          toast.error(`Failed: ${err.message}`);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter Password");
    }
    return result;
  };

  return (
    <div className="row" style={{ paddingTop: 100 }}>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={ProceedLogin}>
          <div className="card">
            <div className="card-header">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => usernameUpdate(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => passwordUpdate(e.target.value)}
                  type="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>{" "}
              |{" "}
              <Link className="btn btn-success" to={"/register"}>
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
