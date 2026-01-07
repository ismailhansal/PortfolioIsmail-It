
import image2 from "../assets/samael3.webp"
import { motion } from "motion/react"

const Hero = () => {
  return (


    <div id="home" className="w-full min-h-screen px-16 py-28 flex flex-col items-center justify-center md:px-32 mt-8">


      <div className="flex flex-col items-center justify-center gap-10 text-white">

        <motion.div

        initial={{y:-50, opacity :0}}
        animate={{y:0, opacity:100}}
        transition={{duration:0.8, delay:0.2}}
        
        
        >
      <img src={image2} className="w-[200px]  cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-indigo-600 md:w-[230px]" alt="" />

      </motion.div>


      <motion.div

      initial={{y:50, opacity:0}}
      animate={{y:0, opacity:100}}
      transition={{duration:0.8, delay:0.2}}

      
      
      
      className="flex max-w-[600px] flex-col items-center justify-center gap-2 text-center">
        <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-light  md:text-5xl -z-10">Ismail HANSAL</h1>

        <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-xl font-light  md:text-2xl -z-10"> Software Engineer · Full-Stack & AI   </h3>

        <p className="text-wrap text-sm font-light text-gray-400 md:text-base">Software Engineer specializing in full-stack web development and applied AI.
  I build scalable web applications using Java, Spring Boot, React, and Python,
  and integrate machine learning models and AI-powered features into real-world products.
  Experienced with REST APIs, databases, and end-to-end system design.</p>




      </motion.div>






    </div>



    </div>

    
  )
}

export default Hero