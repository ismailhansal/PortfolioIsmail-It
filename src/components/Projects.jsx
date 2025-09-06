import gymlogin from "../assets/gymlogin.png"
import optimum from "../assets/optimum.png"
import speedex from "../assets/speedex.png"
import trackify from "../assets/trackify.png"
import homemade from "../assets/homemade.png"
import { motion } from "motion/react"


const projectsData = [


  {
    image : homemade,
    title :"HomeMade",
    description :"A web and mobile application that connects independent home cooks with customers looking for homemade meals. The platform features order management, secure payment, real-time geolocation, user reviews, and intuitive interfaces for both vendors and clients.",
    technologies:["Java","SpringBoot","PostgreSQL","Tailwindcss", "RestApi", "Google maps API", "Firebase", "React native", "Redux"],
    github: "https://github.com/ismailhansal/Homemade---Application-Springboot-de-livraison-de-repas-faits-maison"

  },



  {
    image : gymlogin,
    title :"Gym Manager",
    description :"GymManager is a full-featured web application built to simplify the day-to-day management of fitness centers. It allows administrators to handle member subscriptions, equipment tracking, training programs, coach assignments, class scheduling, and user roles. Designed with usability and efficiency in mind, it provides a smooth experience for both staff and members.",
    technologies:["HTML","CSS","Javascript","Bootstrap", "C#", "Asp.NET CORE", "SQL SERVER"],
    github: "https://github.com/ismailhansal/GymManager"

  },



  {
    image : speedex,
    title :"Speedex-Fleet Management System",
    description :"A web-based application designed to manage vehicle fleets in real time. It includes GPS tracking via Mapbox, maintenance scheduling, alert systems, and optimized route planning, tailored to the logistical needs of SMEs. ",
    technologies:["PHP","HTML","CSS","Javascript","Bootstrap", "MapBoxApi", "Mysql"],
    github: "https://github.com/ismailhansal/Speedex"

  },


  {
    image : trackify,
    title :"Trackify-Fund Management Application ",
    description :"Developed during an AIESEC Hackathon, Trackify is a financial management platform tailored for small businesses. It integrates AI to analyze financial data and provides strategic recommendations for better fund allocation and financial planning. ",
    technologies:["Nextjs","React","Firebase","Tailwindcss","GeminiLlm"],
    github: "https://github.com/ismailhansal/Trackify"

  },



  {
    image : optimum,
    title :"Optimum-Project Team Composition and Optimization Application",
    description :"A platform that matches project teams based on their technical skills and soft skills. The goal is to optimize team composition for greater efficiency and alignment with project requirements.",
    technologies:["Django","SQLite","HTML","CSS","Javascript"],
    github: "https://github.com/ismailhansal/Optimum"

  },







]





const ScrollReveal = ({children})=>{


  return(

    <motion.div 
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >

      {children}


    </motion.div>





  )


}










const ProjectCard=({project})=>{ 


  return (

    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 ">
      <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] -z-10" />

      <div className="flex flex-col gap-5 ">

        <div className="flex flex-col gap-3 -">

        <div className="text-xl font-semibold  ">{project.title}</div>
        <div className="text-gray-400">{project.description}</div>

        <div className="flex flex-wrap gap-5 mb-3">
          {
            project.technologies.map((tech, index) =>

              (

                <span key={index} className="rounded-lg bg-black">
                  {tech}
                </span>



              )
          
          
          
          )
          }
          
        </div>



                <a className="bg-black text-sm self-start px-3 py-2 rounded-md shadow-xl shadow-violet-900 border-blue-800 border hover:shadow-violet-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl font-medium "href={project.github} target="_blank">Visit Github</a>


        
        </div>


         
        
      </div>


    </div>
    </ScrollReveal>
  )




}









const Projects = () => {
  return (



    <div id="projects" className="w-full min-h-screen flex flex-col justify-center items-center gap-16 p-4
     ">

      <ScrollReveal>

      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>

      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">

        {
          projectsData.map((project, index)=>(

            <ProjectCard key={index} project={project}/>
          )
        
        
        
        )

        }






      </div>




    </div>


    













  )
}

export default Projects