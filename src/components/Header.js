import React from "react";

export default function Header() {
  return(
  <div className="logo">
      <LogoSym/>
      <h2>Expense Tracker</h2>
  </div>
  );
}

function LogoSym(){
    return(
    <div className="logosym">
      <img src="logo.svg" alt="" />
    </div>
    );
}

