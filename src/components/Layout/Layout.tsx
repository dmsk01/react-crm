import React from "react";
import Header from "../Header/Header";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
