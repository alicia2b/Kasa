import React from "react";
import { useState } from "react";
import Vector from "../assets/Vector.svg";

export default function Collapse(props) {
  const [display, setDisplay] = useState("none");
  const [isActive, setIsActive] = useState("");
  const [rotate, setRotate] = useState("180deg");
  const items = props.texte;

  function inputCollapse() {
    setIsActive(isActive === "" ? "active" : "");
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setDisplay(display === "block" ? "none" : "block");
  }

  return (
    <div className="about-block" key={props.id} onClick={inputCollapse}>
      <h1 id="title"> {props.title}</h1>
      <img
        className="vector"
        src={Vector}
        style={{ rotate: `${rotate}` }}
        alt="chevron"
      />
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
