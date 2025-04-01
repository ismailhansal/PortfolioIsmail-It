import React, { useState } from 'react';
import { IoIosHelpCircleOutline } from 'react-icons/io'; // Icône plus fine
import '../PopupButton.css'

const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
      {/* Bouton flottant */}
      <div className={`popup-button ${isOpen ? 'open' : ''}`} onClick={togglePopup}>
        <IoIosHelpCircleOutline size={28} color="white" />
      </div>

      {/* Contenu du pop-up */}
      {isOpen && (
        <div className="popup-content">
          <p>Need a Photoshoot?</p>
          <a href="https://photography-portfolio-ismail-hansal.vercel.app/" target="_blank" rel="noopener noreferrer">
            Visit Portfolio
          </a>
        </div>
      )}
    </div>
  );
};

export default PopupButton;
