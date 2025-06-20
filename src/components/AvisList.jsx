import React from "react";

const AvisList = ({ avis, onClose }) => (
  <div className="avis-modal">
    <div className="avis-modal-content">
      <h3>Liste des avis</h3>
      <ul>
        {avis.array.forEach(element => {
            <li key={element.user}>{element.avis}</li>
        })}
      </ul>
      <button onClick={onClose}>Fermer</button>
    </div>
  </div>
);

export default AvisList;