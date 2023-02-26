import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { AccountContext } from "./AccountBox/AccountContext";
import Common from "./AccountBox/Common";
import SignUpForm from "./AccountBox/SignUpForm";
import "./signup.css";

function SignUp() {
  const backdropVariants = {
    expanded: {
      width: "233%",
      height: "1050px",
      borderRadius: "20%",
      transform: "rotate(60deg)",
    },
    collapsed: {
      width: "160px",
      height: "550px",
      borderRadius: "50%",
      transform: "rotate(60deg)",
    },
  };

  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
  };

  const SwitchtoSignUp = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };
  const SwitchtoSignIn = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { SwitchtoSignUp, SwitchtoSignIn };

  return (
    <>
      <AccountContext.Provider value={contextValue}>
        <div className="box-container">
          <div className="top-container">
            <motion.div
              initial={false}
              variants={backdropVariants}
              animate={isExpanded ? "expanded" : "collapsed "}
              transition={expandingTransition}
              className="back-drop"
            ></motion.div>
            {active === "signin" && (
              <div className="header-contain">
                <h2>Welcome</h2>
                <h2>Back</h2>
                <h5>Please sign in to continue</h5>
              </div>
            )}
            {active === "signup" && (
              <div className="header-contain">
                <h2>Create</h2>
                <h2>Account</h2>
                <h5>Please sign up to continue</h5>
              </div>
            )}
          </div>
          <div className="inner-container">
            {active === "signin" && <Common />}
            {active === "signup" && <SignUpForm />}
          </div>
        </div>
      </AccountContext.Provider>
    </>
  );
}

export default SignUp;
