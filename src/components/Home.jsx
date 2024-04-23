import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Navbar from "../Navbarcmp";
import Footer from "../Footer";
import "../bootstrap.min.css";
function Home() {
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
      <Navbar isSignedIn={isSignedIn} active="home" />
      <div className="home-one">
        <img src="home2.jpg" alt="" />
        <h1>
          Better Mental Health <br />
          starts here
        </h1>
        <p>
          Everyone benefits when people feel their best. <br />
          SereneSoul is the proven mental health solution <br /> for employers
          and health plans that changes lives and <br /> drives business
          results, everywhere.
        </p>
        <button className="btn btn-outline-light btn-lg">
          <a href="Articles">Explore</a>
        </button>
      </div>
      <div className="home-two">
        <h2>Trusted By Leading Organisations</h2>
      </div>
      <div className="home-three">
        <img src="garden.jpg" alt="" />
        <h1>
          Inclusive Mental Health <br /> for Everyone
        </h1>
        <p>
          SereneSoul is a comprehensive mental health solution for employers and
          health plans. <br /> Unlike any other solution, we use Precision
          Mental Healthcare to seamlessly pinpoint and deliver exactly the right
          fit for each person - whether that’s digital support, meditation
          exercises, coaching, therapy, medication, and beyond.
        </p>
        <button className="btn btn-outline-light">
          <a href="Findhelp">Learn More</a>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
