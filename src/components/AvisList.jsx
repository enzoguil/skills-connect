import React from "react";

const AvisList = ({ avis, onClose }) => {

  return (
    <div className="avis-modal">
      <div className="avis-modal-content">
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {avis && avis.length > 0 ? (
            avis.map((a, i) => (
              <li key={i}>
                <strong>{a.lastName} {a.firstName} :</strong> {a.comment}
              </li>
            ))
          ) : (
            <li>Aucun avis pour ce profil.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AvisList;