import React, { Children } from "react";
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";
import {motion} from "framer-motion";

const projectsData= [
  {
    image:image1,
    title:"Medicine Recommending System Using ML",
    desciption:"A Medicine Recommending System (MRS) leverages machine learning (ML) to provide personalized medication suggestions based on patient data, aiming to enhance treatment efficacy, reduce side effects, and promote better health outcomes. This system utilizes various ML algorithms and techniques to analyze a patient's medical history, demographic data, lifestyle factors, and sometimes genetic information to recommend the most suitable medications.",
    technologies:["HTML","CSS","Python"],
  },
  {
    image:image2,
    title:"Sale Price Prediction Using ML",
    desciption:"A linear regression sales prediction model utilizes historical sales data to identify and quantify the relationship between independent variables (e.g., advertising spend) and sales, enabling accurate future sales predictions.",
    technologies:["HTML","CSS","Python"],
  },
  {
    image:image3,
    title:"Stock Price Prediction using ML",
    desciption:"Stock Price Prediction using Linear Regression Model",
    technologies:["HTML","CSS","Python"],
  },
  {
    image:image4,
    title:"Image Quality Enhancer in ML using OpenCV",
    desciption:"Image Quality Enhancer in Python using OpenCV which enables users to upscale their inputted Image Quality",
    technologies:["HTML","CSS","Python","OpenCV"],
  },
  {
    image:image5,
    title:"MindEase 2.0",
    desciption:"A Mental Wellness Chatbot Using Google Gemini API and Prompting",
    technologies:["HTML","CSS","Python"],
  },


]


const ScrollReveal =({children})=>{
  return (
    <motion.div 
    initial ={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    viewport={{duration:0.8}}
    >
      {children} 
    </motion.div>
  )
}
const ProjectCard = ({project}) => {
   return(
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] "/>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold ">{project.title}</div>
        <p className="text-gray-400">{project.desciption}</p>
        </div>


        <div className="flex flex-wrap gap-5">
          {
            project.technologies.map((tech,index)=>(
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))
          }
        </div>
       
      </div>
    </div>
    </ScrollReveal>
   )
}
 
const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:py-24">
      <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>
     
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
     {
      projectsData.map((project,index)=> (
        <ProjectCard key={index} project={project}/>
      ))

     }
        
      </div>
    </div>
  )
}

export default Projects
