import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../../index.css";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCredential, setUserCredential] = useState(null); // Add userCredential state

  function emailHandler(event) {
    setEmail(event.target.value);
  }
  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if (userCredential) {
      setEmail("");
      setPassword("");
    }
  }, [userCredential]);

  function signUp(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setUserCredential(userCredential);
        document.getElementById("EmailBox").value = "";
        document.getElementById("PassBox").value = "";
      }
    );
  }

  useEffect(() => {
    if (userCredential) {
      setEmail("");
      setPassword("");
    }
  }, [userCredential]);

  return (
    <div className="card">
      <div className="card-title">
        <h1>Sign Up</h1>
      </div>
      <form className="form" onSubmit={signUp}>
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={emailHandler}
          id="EmailBox"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={passwordHandler}
          id="PassBox"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SignUp;
