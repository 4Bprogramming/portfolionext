import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";

function ProjectCard({ key, project }) {
   return (
    <Col size={12} sm={6} md={4}>
      <div class="">
        <div class="overflow-hidden  aspect-video bg-black-400 cursor-pointer rounded-xl relative group">
          <div class="rounded-xl z-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-1 pt-30 text-white flex items-end">
            <div>
              <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                <div class="font-bold">{project?.title}</div>

                <div class="opacity-60 text-sm ">{project?.description}</div>
              </div>
            </div>
          </div>
          <Image
            alt=""
            class="object-fill h-80 w-196 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            src={project?.img}
          />
        </div>
      </div>
    </Col>

    // <Col size={12} sm={6} md={4}>
    //   <div className="proj-imgbx">
    //     <div
    //       class="relative  overflow-hidden bg-cover bg-no-repeat"
    //       data-te-ripple-init
    //       data-te-ripple-color="light"
    //     >
    //       <Image class="" src={project?.img} alt={project?.title} />
    //       <div class="absolute bottom-0 left-0 right-0 top-0  h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70">
    //         <div className="proj-txtx">
    //           <h4>{project?.title}</h4>
    //           <span>{project?.description}</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="proj-txtx">
    //       <h4>{project?.title}</h4>
    //       <span>{project?.description}</span>
    //     </div>
    //   </div>
    // </Col>
  );
}

export default ProjectCard;
