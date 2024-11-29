import React from "react";
import Header from "../components/Header";

function Layout(props) {
  return (
    <div className="mi-wrapper">
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
