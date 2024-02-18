import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AccountContext } from "./AccountContext";
import "./common.css";
import { AuthContext } from "../Context";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import firebase from "firebase";

function Common() {
  const { user } = useContext(AuthContext);
  const { SwitchtoSignUp } = useContext(AccountContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const uiConfig = {
  //   signInFlow: "popup",
  //   signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //   ],
  //   callbacks: {
  //     signInSuccess: () => false,
  //   },
  // };
  // return (
  //   <div>
  // {!!user ? (
  //       <Navigate to="/" />
  //     ) : (
  //       <div>
  //         <p>Please Sign In</p>
  //         <StyledFirebaseAuth uiConfig={uiConfig} />
  //       </div>
  //     )}
  //   </div>
  // );

  const SignIn = (e) => {
    e.preventDefault();

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
      {user ? (
        <Navigate to="/" />
      ) : (
        <div>
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
      )}
    </div>
  );
}

export default Common;
