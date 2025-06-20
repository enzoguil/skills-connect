import React from "react";

const AvisList = ({ avis, onClose }) => (
  <div className="avis-modal">
    <div className="avis-modal-content">
      <h3>Liste des avis</h3>
      <ul>
        {avis.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
      <button onClick={onClose}>Fermer</button>
    </div>
  </div>
);

export default AvisList;