import React from 'react';
import { motion } from 'framer-motion';

const PythonLogo = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Logo Python importé à partir du dossier public */}
      <img
        src="/python.svg" // chemin relatif depuis le dossier public
        alt="Python Logo"
        className="cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]"
        style={{ width: "80px", height: "80px" }} // Ajuste la taille selon ton besoin
      />
    </motion.div>
  );
};

export default PythonLogo;
