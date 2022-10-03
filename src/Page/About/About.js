import React from "react";
import { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import imageAbout from "../../assets/imageAbout.jpg";
import Vector from "../../assets/Vector.svg"
import "./About.css"

export default function About() {
 

  function AboutItems() {
    const Items = [
      {
        id: 1,
        title: "Fiabilité",
        texte:
          "Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes au logement et toutes les informations sont régulièrement vérifiées par nos équipes.",
      },
      {
        id: 2,
        title: "Respect",
        texte:
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme",
      },
      {
        id: 3,
        title: "Service",
        texte:
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.N'hésitez pas à nous contacter si vous avez la moindre question",
      },
      {
        id: 4,
        title: "Sécurité",
        texte: `La sécurité est la priorité est la priorité de Kasa aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. 
        En laissant unenote aussi bien à l'hôte qu'aux locataire,cela permet à nos équipes de vérifier que les standarts sont bien respectés. 
        Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.`,
      },
    ];
    return Items;
  }
  const Items = AboutItems();
  
  function HandleExpanded(props) {
    const isExpanded=props.isExpanded;
    if(isExpanded){
      return 
      
    }
    return
    
  }
  return (
    <div>
      <Header />
      <div className="cover">
      <img src={imageAbout} alt="montagnes"></img>
      </div>
      {Items.map((item) => {
        return (
          <div className="about-block" key={item.id}>
            <div className="title" onClick={HandleExpanded}>
              <h1 className="title" key={item.id}>{item.title}</h1>
              <img className="vector" src={Vector}/>
            </div>
            <div className="texte" isExpanded={false} key={item.id}>{item.texte}</div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
