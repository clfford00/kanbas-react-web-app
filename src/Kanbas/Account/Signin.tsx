import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const signin = async () => {
    try {
      const currentUser = await client.signin(credentials);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Sign in</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <input
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="form-control"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <input
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="form-control"
          placeholder="Password"
          type="password"
        />
      </div>
      <button onClick={signin} className="btn btn-primary w-100 mb-3">
        Sign in
      </button>
      <div className="text-center">
        <Link to="/Kanbas/Account/Signup">Sign up</Link>
      </div>
    </div>
  );
}
