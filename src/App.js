import React from "react";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Findhelp from "./components/Findhelp";
import Tracker from "./components/Tracker";
import SignInPage from "./components/SignInPage";
import BlogPage from "./components/BlogPage";
import dataarticles from "./components/Dataarticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignInpage" element={<SignInPage />} />
          <Route path="Tracker" element={<Tracker />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/Findhelp" element={<Findhelp />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route
            path="/BlogPage/0"
            element={
              <BlogPage
                name={dataarticles[0].name}
                script1={dataarticles[0].script1}
                img={dataarticles[0].img}
                content={dataarticles[0].content}
              />
            }
          ></Route>
          <Route
            path="/BlogPage/1"
            element={
              <BlogPage
                img={dataarticles[1].img}
                name={dataarticles[1].name}
                script1={dataarticles[1].script1}
                content={dataarticles[1].content}
              />
            }
          ></Route>
          <Route
            path="/BlogPage/2"
            element={
              <BlogPage
                img={dataarticles[2].img}
                name={dataarticles[2].name}
                script1={dataarticles[2].script1}
                content={dataarticles[2].content}
              />
            }
          ></Route>
          <Route
            path="/BlogPage/3"
            element={
              <BlogPage
                img={dataarticles[3].img}
                name={dataarticles[3].name}
                script1={dataarticles[3].script1}
                content={dataarticles[3].content}
              />
            }
          ></Route>
          <Route
            path="/BlogPage/4"
            element={
              <BlogPage
                img={dataarticles[4].img}
                name={dataarticles[4].name}
                script1={dataarticles[4].script1}
                content={dataarticles[4].content}
              />
            }
          ></Route>
          <Route
            path="/BlogPage/5"
            element={
              <BlogPage
                img={dataarticles[5].img}
                name={dataarticles[5].name}
                script1={dataarticles[5].script1}
                content={dataarticles[5].content}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
