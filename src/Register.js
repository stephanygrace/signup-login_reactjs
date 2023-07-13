import { useState } from "react";

const Register = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [pass, passchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [country, countrychange] = useState("");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, pass, email, phone, country, address, gender };
    console.log("🚀 ~ file: Register.js:17 ~ handleSubmit ~ regobj:", regobj);
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>Welcome to the Xoo</h1>
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
                    <label>
                      Phone <span className="errmsg">*</span>
                    </label>
                    <input
                      className="form-control"
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country <span className="errmsg">*</span>
                    </label>
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
              | <a className="btn btn-danger">Back</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
