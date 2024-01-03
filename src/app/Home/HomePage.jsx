"use client";
import React from "react";
import "./HomePage.css";
import Image from "next/image";
// import Texto from "./Texto";
import TextHome from "../Components/TextHome";

function HomePage() {
  return (
    <header>
      <div className="headerHome flex light-bg">
        <div className="titleExpert">
          <div className="roscasHome"></div>
          <h1 className="white">¡Somos 4B</h1>
          <br />
          <br />
          <br />
          <h1 className="white2">Programming!</h1>

          <TextHome />

          {/* <Texto /> */}

          <p className="textHomeP">
            Somos una empresa dedicada a la programación, realizamos desarrollo
            de aplicaciones web con diseños totalmente adaptables a cualquier
            pantalla. Nos especializamos en realizar bases de datos para guardar
            información y poder utilizar esa información desde cualquier
            dispositivo y cualquier lugar. <br/><br/>Trabajamos con las tecnologías más
            solicitadas del mercado para asegurar que tu sitio web esté alineado
            con los estándares actuales de la era digital. Nuestro objetivo es
            brindarte una presencia en línea efectiva y atractiva junto con un
            equipo de diseñadores para crear paginas innovadoras y únicas.<br/><br/>
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
