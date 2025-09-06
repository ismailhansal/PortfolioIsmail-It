import autogalerie from "../assets/autogalerie.png"
import choaib from "../assets/choaib.png"
import boiteamob from "../assets/boiteamob.png"
import saas from "../assets/saas.png"
import karame from "../assets/karame.png"
import { motion } from "motion/react"


const projectsData = [


  {
    image: karame,
    title: "Maison Karamé - Ecommerce website",
    description:
      "An e-commerce website for Maison Karamé, allowing users to browse products, add items to the cart, and securely complete purchases. Features responsive design, product categories, search functionality, and smooth checkout experience.",
    technologies: ["React", "Laravel", "Mysql", "Tailwindcss", "RestApi", "Google maps API", "Firebase"],
    live: "https://marrakech-market-oasis.vercel.app/",
  },
  {
    image: autogalerie,
    title: "Auto Gallerie - Car Selling",
    description:
      "A web application for Auto Gallerie that allows users to browse and search cars for sale, view details, and contact the seller. It includes filtering options, responsive design, and a clean user interface for smooth navigation.",
    technologies: ["React", "Laravel", "Mysql", "Tailwindcss", "RestApi", "Google maps API", "Firebase"],
    live: "https://auto-galerie-vision.vercel.app/",
  },
  {
    image: boiteamob,
    title: "Boite à Mob - Furniture Catalog",
    description:
      "A web-based furniture catalog that lets users explore furniture products with images, descriptions, and categories. Built for smooth browsing and responsive design, with Firebase integration for backend data management.",
    technologies: ["React", "Firebase", "Mysql", "Tailwindcss"],
    live: "https://boite-a-mob.vercel.app/",
  },
  {
    image: saas,
    title: "Maroc Estate - SaaS Real Estate Application (Personal Project)",
    description:
      "A personal real estate SaaS project to manage property listings, allow users to search and filter properties, and provide an intuitive dashboard for property management. Built with React, Laravel, and MySQL for scalable backend support.",
    technologies: ["React", "Laravel", "Mysql", "Tailwindcss", "RestApi"],
    live: "", // tu peux mettre un lien si disponible
  },
  {
    image: choaib,
    title: "Choaib Sadouni - Ophthalmologist Blog",
    description:
      "A professional blog website for Dr. Choaib Sadouni, featuring informative articles, responsive design, and an easy-to-navigate layout. Users can read posts, browse categories, and contact the doctor via a contact form.",
    technologies: ["React", "Laravel", "Mysql", "Tailwindcss", "RestApi", "Google maps API"],
    live: "https://choaibsadouni.vercel.app/",
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

        <div className="flex flex-col gap-3">

        <div className="text-xl font-semibold ">{project.title}</div>
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



                <a className="bg-black text-sm self-start px-3 py-2 rounded-md shadow-xl shadow-violet-900 border-blue-800 border hover:shadow-violet-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl font-medium  flex items-center gap-2"href={project.live} target="_blank"> <span>→ </span>  Visit Live</a>


        
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

      <h1 className="text-4xl mt-32 font-light text-white md:text-6xl">My Freelance Projects</h1>

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