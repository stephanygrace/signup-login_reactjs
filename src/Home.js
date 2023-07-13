import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      navigate("/login");
    }
  });

  return (
    <div>
      <div className="header">
        <Link to={"/"} style={{ color: "white" }}>
          Home
        </Link>
        <Link to={"/login"} style={{ color: "white", float: "right" }}>
          Logout
        </Link>
      </div>
      <h1 className="text-center" style={{ paddingTop: 50 }}>
        Welcome to the Zoo
      </h1>
    </div>
  );
};
export default Home;
