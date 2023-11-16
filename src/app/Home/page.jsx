"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./HomeP.css";
import "animate.css";

function page() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Páginas Web", "e-commerce", "¡y Mucho más!"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <>
      {/* <div className="homepage"></div> */}
      <div className="flex justify-between h-[512px] homepage" id="home">
        <div className="w-full shrink-0 mt-32 flex flex-col items-center md:block md:w-auto bodyhome">
          <h2 className="text-5xl text-white text-center font-bold max-w-xs md:text-left">
            ¡Somos 4B Programming!
          </h2>
          <h2 className="text-4xl text-white text-center font-medium mt-4 md:text-left">
            <span
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='[ "Páginas Web", "e-commerce", "¡Mucho más!" ]'
            >
              <span className="wrap">{text}</span>
            </span>
            {/* Our pizza is always made with fresh ingredients. */}
          </h2>
          <div className="mt-4">
            {/* <Button variant="white" onClick={() => document.querySelector('#menu')?.scrollIntoView()}>
                Order now
            </Button> */}
          </div>
        </div>
        <div className="hidden md:block self-center">
          <img
            src="/header-img.svg"
            alt="Pizza image"
            width="600"
            height="500"
            priority
          />
        </div>
      </div>
    </>
  );
}

export default page;
