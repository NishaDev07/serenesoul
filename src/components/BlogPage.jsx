import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Navbarcmp from "../Navbarcmp";
import Footer from "../Footer";
function BlogPage(props) {
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
      <Navbarcmp isSignedIn={isSignedIn} active="articles"></Navbarcmp>
      <div className="articles-one">
        <img src="../happypeople.jpg" alt="" />
        <div className="articles-one-1">
          <h1>Soul Reflections</h1>
          <h3>Blogging the Journey to Mental Health</h3>
        </div>
      </div>
      <div className="blog-page-one">
        <div className="blog-page-one-1">
          <h1>{props.script1}</h1>

          <img src={`../${props.img}`} alt="" />
        </div>
      </div>
      <div className="blog-page-two">
        <h3>{props.name}</h3>
      </div>
      <div className="blog-page-three">
        <p>{props.content}</p>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default BlogPage;
