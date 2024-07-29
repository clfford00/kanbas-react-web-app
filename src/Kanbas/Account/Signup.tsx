import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Sign up</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <input
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="form-control"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button onClick={signup} className="btn btn-primary w-100 mb-3">
        Sign up
      </button>
      <div className="text-center">
        <Link to="/Kanbas/Account/Signin">Sign in</Link>
      </div>
    </div>
  );
}
