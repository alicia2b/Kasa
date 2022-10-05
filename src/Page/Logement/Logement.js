import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import cardItems from "../../assets/logements";
import "../Logement/Logement.css";
import Vector from "../../assets/Vector.svg";
import StarsColored from "../../components/starsColored";
import Caroussel from "../../components/caroussel/carousel"

export default function Logement() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const foundItem = cardItems.find((c) => c.id === id);
    setItem(foundItem);
  }, []);

  if (!item) {
    return <p>Pas d'item</p>;
  }

  return (
    <>
      <Header />
     {/*} <div className="slider" key={item.id}>
        <img src={item.pictures[0]} alt=" item" />*/}
        <Caroussel pictures={item.pictures}></Caroussel>
        <div className="content">
          <div className="bloc-left">
            <div className="location">
              <b>{item.title}</b>
              <p>{item.location}</p>
            </div>
            <div className="tags">
              <ul>
                {item.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bloc-right">
            <div className="NbRating">
              <StarsColored rating={item.rating} />
            </div>

            <div className="host">
              <p>{item.host.name}</p>
              <img src={item.host.picture} alt="host " />
            </div>
          </div>
        </div>

        <div className="description">
          <div className="text">
            <h2>Description</h2>
            <img className="vector" src={Vector} />
            <div>{item.description}</div>
          </div>
          <div className="equipements">
            <h2>Equipements</h2>
            <img className="vector" src={Vector} />
            <ul>
              {item.equipments.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
    </>
  );
}
