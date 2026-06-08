
import { courses } from "@/data";
import React from "react";
import Projectcard from "./Projectcard";
import SectionHeading from "../Components/SectionHeading";

const Project = () => {
  return (
    
    <div data-aos="fade-up"
            data-aos-delay="200" className="lg:py-20 bg-gray-900 ">
      
      <div className="grid md:grid-cols2 lg:grid-cols-3 gap-6 pt-14 w-[80%] mx-auto ">
        {courses.map((course, index) => {
          return (
            <div key={index}>
              <Projectcard {...course} />
            </div>
          );
        })}
      </div>
      <SectionHeading title_1="success stories" title_2="Dont Take Our word for it"/>
    </div>
  );
};

export default Project;
