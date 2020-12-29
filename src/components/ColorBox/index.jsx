import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

const getRandomColor = () => {
  const COLOR_LIST = [
    "deeppink",
    "teal",
    "tomato",
    "orange",
    "powderblue",
    "#513454",
  ];

  const randomIndex = Math.round(Math.random() * 6);
  // Math.round = Math.trunc

  return COLOR_LIST[randomIndex];
};
// Nen tach cac function ra khoi handleClick de code nhin gon gang hon

function ColorBox() {
  // const initColor = localStorage.getItem("box_color") || "deeppink";
  // console.log(initColor);
  // const [color, setColor] = useState(initColor);

  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    console.log(initColor);
    return initColor;
  });
  // Vi khi dua du lieu tu initColor vao color thi no chi dung` 1 lan`, nen de cho gon code va 

  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box_color", newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      Color Box
    </div>
  );
}

export default ColorBox;
