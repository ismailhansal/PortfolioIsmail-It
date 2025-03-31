import React, { useState } from 'react';
import { IoIosHelpCircleOutline } from 'react-icons/io'; // Icône plus fine
import '../'

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
          <p>Need a website?</p>
          <a href="https://portfolio-ismail-z4d1.vercel.app/" target="_blank" rel="noopener noreferrer">
            Visit Portfolio
          </a>
        </div>
      )}
    </div>
  );
};

export default PopupButton;
