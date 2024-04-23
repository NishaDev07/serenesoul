import React from "react";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div className="footer">
      <p>SWE2005 : Software Testing</p>
    </div>
  );
}
export default Footer;
