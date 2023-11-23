"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
// import "./HomeP.css";
import "animate.css";

function page() {

  return (
    <>
      {/* <div className="homepage"></div> */}
      <div className="flex justify-between h-[512px] contactpage" id="skills">
        <div className="w-full shrink-0 mt-32 flex flex-col items-center md:block md:w-auto bodyhome">
          <h2 className="text-5xl text-black text-center font-bold max-w-xs md:text-left">
           SKILLS
          </h2>
        </div>
      </div>
    </>
  );
}

export default page;
