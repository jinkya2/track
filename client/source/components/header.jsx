import React from "react";

function Header() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let mm1 = months[today.getMonth()];
  let yyyy = today.getFullYear();

  today = dd + " " + mm1 + " " + yyyy;
  console.log(today);
  return (
    <React.Fragment>
      <div className="header">
        <span className="header-text1">{today}</span>
        <span className="header-text2">{"Hello Ajinkya"}</span>
      </div>
    </React.Fragment>
  );
}

export default Header;
