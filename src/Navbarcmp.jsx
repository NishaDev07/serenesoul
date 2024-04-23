import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../src/firebase";

function signOutHAndler() {
  auth.signOut();
}
function Navbarcmp({ active, isSignedIn }) {
  // var home, findhelp, tracker, articles;
  const navItems = [
    { name: "Home", path: "/", active: active === "home" },
    {
      name: "Find Help",
      path: "/Findhelp",
      active: active === "findhelp",
    },
    { name: "Tracker", path: "/Tracker", active: active === "tracker" },
    {
      name: "Articles",
      path: "/Articles",
      active: active === "articles",
    },
  ];

  return (
    <div className="topnav">
      {navItems.map((item, index) => (
        <Link
          key={index}
          className={item.active ? "active" : ""}
          to={item.path}
        >
          {item.name}
        </Link>
      ))}
      {isSignedIn ? (
        <Link to="/" onClick={signOutHAndler}>
          Sign Out
        </Link>
      ) : (
        <Link to="/SignInPage">Sign In</Link>
      )}
    </div>
  );
}
export default Navbarcmp;

// {/* <Link className={home} to="/Home">
//         Home
//       </Link>
//       <Link className={findhelp} to="/Findhelp">
//         Find Help
//       </Link>
//       <Link className={tracker} to="/Tracker">
//         Tracker
//       </Link>
//       <Link className={articles} to="/Articles">
//         Articles
//       </Link> */}

// switch (props.active) {
//   case "home":
//     home = "active";
//     break;
//   case "findhelp":
//     findhelp = "active";
//     break;
//   case "tracker":
//     tracker = "active";
//     break;
//   case "articles":
//     articles = "active";
//     break;
//   default:
//     break;
// }
