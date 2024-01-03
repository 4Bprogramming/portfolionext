"use client";

import React from "react";
import Image from "next/image";
import "animate.css";
import img1 from '../../../public/pequenos.PNG'
import ProjectCard from '../Components/ProjectCard'
import projects from '../Components/Data/data.js'

function page() {
 

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Proyectos</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
        Nuestros proyectos Recientes son:
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          {/* <button
            
            
          >
            Projects
          </button>
          */}
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
         
        {
                          projects?.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                project={...project}
                                />
                            )
                          })
                        }
       
        </div>
       
      </div>
    </>
  );
}

export default page;
