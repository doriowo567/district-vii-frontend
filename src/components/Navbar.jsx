import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2>DISTRICT VII</h2>

      <button onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;