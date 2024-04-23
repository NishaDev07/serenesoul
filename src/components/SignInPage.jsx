import React from "react";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Footer from "../Footer";
function SignInPage() {
  return (
    <div className="bck">
      <div className="signinpageheader">
        <h1>SereneSoul</h1>
      </div>
      <div className="signincontainer">
        <SignIn />
        <SignUp />
      </div>
      <Footer />
    </div>
  );
}

export default SignInPage;
