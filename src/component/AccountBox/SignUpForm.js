import React, { useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { AccountContext } from "./AccountContext";
import "./signupForm.css";

function SignUpForm() {
  const { SwitchtoSignIn } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Signed in
        console.log(auth);
        // ...
      })
      .catch((error) => alert(error.message));
    // ..
  };
  return (
    <div className="form-container1">
      <form>
        <input type="text" placeholder="Full Name" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="password" placeholder="Confirm Password" />
      </form>
      <button type="submit" onClick={register} className="button1">
        Sign Up
      </button>
      <div className="option2">
        <p>Already have an account?</p>
        <Link onClick={SwitchtoSignIn} href="#" className="bold-link1">
          Sign-in
        </Link>
      </div>
    </div>
  );
}

export default SignUpForm;
