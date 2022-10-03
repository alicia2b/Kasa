import React, { useState, useParams } from "react";
import { Link,useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import cardItems from "../../assets/logements";
import "../Logement/Logement.css";

export default function Logement() {
  
  let {id}  = useParams();
  let location=useLocation();
  function OneLogement() {
    //const nbPictures = cardItems.length;
    const [i, SetActiveStep] = useState(0);
    const goToNextPicture = () => {
      SetActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
      <>
      
        <Header />
        {cardItems.map((item) => {
          return (
            <Link to={`logement/${item.id}`}>
            <div className="slider" key={item.id}>
              <img src={item.pictures} alt=" item" />

              <div className="content">
                <b>{item.title}</b>
                <p>{item.location}</p>
                <div className="host">
                  <p>{item.host.name}</p>
                  <img src={item.host.picture} alt="host "></img>
                </div>
                <div className="tags">
                  <ul>
                    <li>{item.tags}</li>
                  </ul>
                  <div className="NbRating">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
                    </svg>
                  </div>
                </div>
                <div className="text">{item.description} </div>
                <div className="equipements">
                  <ul>
                    <li>{item.equipments}</li>
                  </ul>
                </div>
              </div>
            </div>
            </Link>
          );
        })}
      </>
    );
  }
}
