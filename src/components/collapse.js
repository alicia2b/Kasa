import React from "react";
import { useState } from "react";
import Vector from "../assets/Vector.svg";

export default function Collapse(props) {
  const [display, setDisplay] = useState("none");
  const [isActive, setIsActive] = useState("");
  const items = props.texte;

  function inputCollapse() {
    setIsActive(isActive === "" ? "active" : "");
   
    setDisplay(display === "active" ? "none" : "block");
  }

  return (
    <div className="about-block" onClick={inputCollapse} key={props.id}>
      <h1 id="title"> {props.title}</h1>
      <img className="vector" src={Vector} alt="chevron" />
      <div
        className={`texte ${isActive}`}
        key={props.id}
        style={{ display: `${display}` }}
      >
        {props.texte}
      </div>
    </div>
  );
}
