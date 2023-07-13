import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AppHeader = () => {
  const [displayUsername, setDisplayUsername] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowMenu(false);
    } else {
      setShowMenu(true);
      let username = sessionStorage.getItem("username");
      if (!username) {
        navigate("/login");
      } else {
        setDisplayUsername(username);
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      {showMenu && (
        <div className="header">
          <span style={{ marginLeft: "5%", color: "white" }}>
            Welcome: <b>{displayUsername}</b>
          </span>
          <Link to={"/"} style={{ marginLeft: "5%", color: "white" }}>
            Home
          </Link>
          <Link to={"/customer"} style={{ marginLeft: "5%", color: "white" }}>
            Customer
          </Link>
          <Link style={{ float: "right", color: "white" }} to={"/login"}>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
