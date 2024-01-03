"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./Skills.css";
import "animate.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function page() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>

<section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              Contamos con un equipo especializado para resolver tus dudas, y realizar los diseños basado a lo que el cliente desea.
              <br></br>
              Entregamos sprints cada semana para ir mostrando el avance, nuestro tiempo de entrega es de 2 semanas aproximadamente.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {/* <div className="item">
                  <Image src="/meter1.svg" alt="Image" width={20} height={20}/>
                </div> */}
                <div className="item">
                <Image src="/meter2.svg" alt="Image" width={20} height={20}/>
                  <h5>Market Place</h5>
                </div>
                <div className="item">
                <Image src="/meter3.svg" alt="Image" width={20} height={20}/>
                  <h5>E-commerce</h5>
                </div>
                <div className="item">
                <Image src="/meter1.svg" alt="Image" width={20} height={20} />
                  <h5>Front, Back, Base de datos</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Image className="background-image-left" src="/color-sharp.png"  width={0} height={0} alt="Image" />
    </section>





      {/* <div className="homepage"></div>
      <div className="flex justify-between h-[512px] contactpage" id="skills">
        <div className="w-full shrink-0 mt-32 flex flex-col items-center md:block md:w-auto bodyhome">
          <h2 className="text-5xl text-black text-center font-bold max-w-xs md:text-left">
           SKILLS
          </h2>
        </div>
      </div> */}
    </>
  );
}

export default page;
