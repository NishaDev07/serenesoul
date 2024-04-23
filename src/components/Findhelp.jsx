import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Navbar from "../Navbarcmp";
import Footer from "../Footer";
import Tiles from "./Tiles";
import Psych from "./Psych";

function createCard(Psychterm) {
  return (
    <Tiles
      key={Psychterm.id}
      img={Psychterm.img}
      name={Psychterm.name}
      email={Psychterm.email}
      ph={Psychterm.ph}
      sp={Psychterm.sp}
    />
  );
}
function Findhelp() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check if user is already signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <Navbar isSignedIn={isSignedIn} active="findhelp" />
      <div className="findhelp-one">
        <div className="findhelp-one-1">
          <h1>We are here to Help</h1>
          <h3>
            Tailored guidance for emotional well-being from diverse expert
            coaches.
          </h3>
        </div>
        <img src="counseller2.jpg" alt="" />
      </div>
      <div className="findhelp-two">
        <h2>Choose the right mental health coach for you</h2>
      </div>
      <div className="findhelp-three">
        <div className="findhelp-three-1">{Psych.map(createCard)}</div>
      </div>
      <Footer />
    </div>
  );
}
export default Findhelp;
