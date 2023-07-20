import React from "react";
import { Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <h1 style={{ color: "white", margin: 0 }}>
          Superhero Fighter Simulator
        </h1>
      </nav>
      <Outlet />
    </>
  );
}
