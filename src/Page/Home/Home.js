import React from "react";
import "../Home/Home.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import imgHome from "../../assets/ImgHome.jpg";
import cardItems from "../../assets/logements";
import { Link, useParams } from "react-router-dom";

export default function Home() {

    const AppCard=()=>(
      <div className="listCard">
      {cardItems.map((item) => {
        return (
          <Link to={`/logement/${item.id}`}>
          <div className="card" key={item.id}>
            <img  src={item.cover} alt={item.title} />
            <b >{item.title}</b>
          </div>
          </Link>
        );
      })}
    </div>
    
    )
  return (
    <div>
      <Header />
      <div className="cover">
        <p>Chez vous, partout et ailleurs</p>
        <img src={imgHome} alt="paysage" />
      </div>
      <AppCard/>
      <Footer />
    </div>
  
  );
      
}
