import { BiLogoDjango, BiLogoDocker, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"


import { motion } from "motion/react"








const Tech = () => {



  const variants ={
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}

  }





  return (
    <div id="tech" className="w-full min-h-[70vh] flex flex-col items-center justify-center gap-16 text-4xl md:text-6xl ">



      <motion.h1

      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}

      id="projects"
      
      
      
      
      className="text-4xl font-light text-white md:text-6xl">Technologies</motion.h1>

      <div className="flex flex-wrap items-center justify-center  gap-10 p-5">

        <motion.div

        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        
        
        >

          <BiLogoTypescript
          style={{ fill: "#0EA5E9" }}
          className="cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]"
            />
        </motion.div>







          <motion.div

            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}
          
          
          
          >
          <BiLogoJavascript
          style={{ fill: "yellow" }}
          className="cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]"
            />



          </motion.div>



            <motion.div

            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}
            
            >
          <BiLogoDocker
          style={{ fill: "#0db7ed" }}
          className="cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]"
            />

          </motion.div>




          <motion.div

          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration:0.5}}
                    
          
          
          
          >

          <BiLogoTailwindCss
          style={{ fill: "#3486eb" }}
          className="cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]"
            />

          </motion.div>




          <motion.div

          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration:0.5}}
          
          
          
          
          
          >
          <BiLogoNodejs
          style={{ fill: "green" }}
          className="cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]"
            />

          </motion.div>







          <motion.div

          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration:0.5}}
          
          
          >
          <BiLogoPostgresql
          style={{ fill: "#0EA5E9" }}
          className="cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]"
            />

          </motion.div>




      </div>





    </div>


   
  )
}

export default Tech