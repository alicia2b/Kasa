import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import cardItems from "../assets/logements";

export default function StarsColored(props) {
  let nbStars = props.rating;
  console.log(nbStars);

  const maxStar = 5;
  const stars = [];

  for (let i = 1; i < maxStar + 1; i++) {
    if (i <= nbStars) {
      stars.push(
        <svg className="active-star" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
        </svg>
      );
    } else {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg">
          <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
        </svg>
      );
    }
  }
  return <>{stars}</>;
}
