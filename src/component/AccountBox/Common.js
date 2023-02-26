import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AccountContext } from "./AccountContext";
import "./common.css";

function Common() {
  const { SwitchtoSignUp } = useContext(AccountContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Signed in
        console.log(auth);
        // ...
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="form-container2">
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/reset-password" className="muted-link2">
          Forgotten Password
        </Link>
      </form>
      <button onClick={SignIn} type="submit" className="button2">
        Sign In
      </button>
      <div className="option3">
        <p>Don't have an account yet?</p>
        <Link onClick={SwitchtoSignUp} href="#" className="bold-link2">
          Sign-up
        </Link>
      </div>
    </div>
  );
}

export default Common;
