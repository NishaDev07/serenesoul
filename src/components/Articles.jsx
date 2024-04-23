import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Navbarcmp from "../Navbarcmp";
import Footer from "../Footer";
import BlogCard from "./BlogCard";
import Dataarticles from "./Dataarticles";

function createCard(Dataarticlesterm, index) {
  return (
    <BlogCard
      key={Dataarticlesterm.id}
      id={index}
      img={Dataarticlesterm.img}
      name={Dataarticlesterm.name}
      script1={Dataarticlesterm.script1}
    />
  );
}

function Articles() {
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
      <Navbarcmp isSignedIn={isSignedIn} active="articles" />
      <div className="articles-one">
        <img src="happypeople.jpg" alt="" />
        <div className="articles-one-1">
          <h1>Soul Reflections</h1>
          <h3>Blogging the Journey to Mental Health</h3>
        </div>
      </div>
      <div className="articles-two">
        <div className="articles-two-1">
          <h1>Articles with blogs</h1>
        </div>
        <div className="articles-two-2">{Dataarticles.map(createCard)}</div>
      </div>
      <Footer />
    </div>
  );
}
export default Articles;
