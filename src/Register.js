import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [pass, passchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [country, countrychange] = useState("");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("male");

  const navigate = useNavigate();

  const isValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += "Username ";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += "Fullname ";
    }
    if (pass === null || pass === "") {
      isproceed = false;
      errormessage += "Password ";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += "Email ";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^\S+@\S+\.\S+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter a valid email");
      }
    }
    return isproceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, pass, email, phone, country, address, gender };
    if (isValidate()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered Successfully");
          navigate("/login");
        })
        .catch((err) => {
          toast.error(`Failed: ${err.message}`);
        });
    }
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6" style={{ paddingTop: 100 }}>
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>Register</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={pass}
                      onChange={(e) => passchange(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      className="form-control"
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      className="form-control"
                      value={country}
                      onChange={(e) => countrychange()}
                    >
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="singapore">Singapore</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      name=""
                      id=""
                      className="form-control"
                      value={address}
                      onChange={(e) => addresschange(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br /> <br />
                    <input
                      name="gender"
                      type="radio"
                      value="male"
                      className="app-check"
                      checked={gender === "male"}
                      onChange={(e) => {
                        genderchange(e.target.value);
                      }}
                    ></input>
                    <label> Male </label>
                    <input
                      name="gender"
                      type="radio"
                      value="female"
                      className="app-check"
                      checked={gender === "female"}
                      onChange={(e) => {
                        genderchange(e.target.value);
                      }}
                    ></input>
                    <label> Female </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>{" "}
              |{" "}
              <a href="http://localhost:3000" className="btn btn-danger">
                Back
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
