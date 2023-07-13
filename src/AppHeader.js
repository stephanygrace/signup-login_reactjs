import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AppHeader = () => {
  const [displayusername, displayusernameupdate] = useState(null);
  const [showmenu, showmenuupdate] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      showmenuupdate(false);
    } else {
      showmenuupdate(true);

      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        navigate("/login");
      } else {
        displayusernameupdate(username);
      }
    }
  }, [location, navigate]);

  return (
    <div>
      {showmenu && (
        <div className="header">
          <span style={{ marginLeft: "2%" }}>
            Welcome: <b>{displayusername}</b>
          </span>
          <Link to={"/"} style={{ color: "white", marginLeft: "5%" }}>
            Home
          </Link>
          <Link to={"/customer"} style={{ color: "white", marginLeft: "5%" }}>
            Customer
          </Link>

          <Link to={"/login"} style={{ color: "white", float: "right" }}>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
