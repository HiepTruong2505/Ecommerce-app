import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 10, borderRadius: 5 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        style={{ padding: 10, marginBottom: 10, borderRadius: 5 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        onClick={handleClick}
        style={{
          padding: 10,
          width: 100,
          backgroundColor: "rgb(47 176 127)",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
