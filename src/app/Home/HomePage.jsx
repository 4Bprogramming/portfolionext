"use client";
import React from "react";
import "./HomePage.css";
import Image from "next/image";
import Texto from "./Texto";

function HomePage() {
  return (
    <header>
      <div className="headerHome flex light-bg">

      
        <div className="titleExpert">
        <div className="roscasHome"></div>
          <h1 className="white">¡Somos 4B</h1><br /><br /><br />
          <h1 className="white2">Programming!</h1>
          <Texto />
          <p>
                  Somos una empresa que se dedica a la realización de paginas web, 
                  e-commerce, market place y mucho más, usamos las tecnologías mas 
                  demandadas del mercado como, por ejemplo: React, Node.js, firebase, entre otros.
                  Nuestros precios son muy accesibles dentro del mercado y tenemos un 
                  tiempo corto de respuesta, ¡consulta sin ningún compromiso!

                  </p>
        </div>
        <Image src="/header-img.svg" width={463} height={513} alt="compu" />
      </div>
    </header>
  );
}

export default HomePage;
