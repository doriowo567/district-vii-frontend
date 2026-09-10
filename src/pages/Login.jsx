import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";

import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <h1>DISTRICT VII</h1>
      </div>

      <div className="right-side">
        <h2>Login</h2>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <Button
          text="Login"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}

export default Login;