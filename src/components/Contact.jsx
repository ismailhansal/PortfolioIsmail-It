
import { motion } from "motion/react"


const Contact = () => {
  return (


    <div id="contact" className="flex flex-col justify-center items-center px-4 py-28 gap-10 ">

      <h1
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8 ,delay:0.2}}
      
      
      
      className="text-4xl bg-gradient-to-r from-violet-400  to-blue-400 bg-clip-text text-transparent sm:text-5xl md:text-6xl">Get In Touch</h1>
      <p 

        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8 ,delay:0.2}}
              
      
      
      className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ad!</p>
      <div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8 ,delay:0.2}}
      
      
      
      className="bg-black px-4 py-3 rounded-md shadow-xl shadow-violet-900 border-blue-800 border hover:shadow-violet-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl font-medium "><a href="mailto:ismailhansal3@gmail.com">Contact Me</a></div>




    </div>




    
  )
}

export default Contact