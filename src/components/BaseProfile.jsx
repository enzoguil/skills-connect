import React, { useState } from "react";
import AvisList from "../components/AvisList";
import { Link } from "react-router-dom";

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function BaseProfile({
  avatar = "",
  name = "LECLERC Maxime",
  email = "",
  tags = ["Marketing", "SEO / SEA", "Anglais", "Rédaction"],
  rating = 5,
  reviews = 11,
}) {
  const avis = [
    {user: "NOM1 Prénom1", avis: "Avis 1 !"},
    {user: "NOM2 Prénom2", avis: "Avis 2 !"},
    {user: "NOM3 Prénom3", avis: "Avis 3 !"},
  ];
  const [showAvis, setShowAvis] = useState(false);
  const hasAvatar = avatar && avatar.trim() !== "";
  return (
    <>
    <div className="profil-card shadow-lg me-5">
      <Link to={"mailto:" + email} className="swipe-link d-flex flex-column align-items-center text-decoration-none">
        {hasAvatar ? (
          <img src={avatar} alt="Profil" className="swipe-avatar" />
        ) : (
          <div className="swipe-avatar initials-avatar d-flex align-items-center justify-content-center">
            {getInitials(name)}
          </div>
        )}
        <h3 className="swipe-name mt-3 mb-2">{name}</h3>
      </Link>
      <div className="swipe-tags mb-3">
        {tags.map((tag, i) => (
          <span key={i} className="badge swipe-badge me-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      {/* Affiche la note seulement si rating !== -1 */}
      {rating !== -1 && (
        <div className="swipe-rating d-flex align-items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="swipe-dot"
              style={{
                background: i < rating ? "#00BFAE" : "#EBF4F4",
              }}
            ></span>
          ))}
          <span className="ms-2 swipe-score">{rating}/5</span>
        </div>
      )}
      <div className="swipe-reviews mb-2">
        <span className="swipe-reviews-link" onClick={() => setShowAvis(!showAvis)}>{reviews} avis &gt;</span>
        {showAvis && (
          <AvisList avis={avis} onClose={() => setShowAvis(false)} />
        )}
      </div>
    </div>
    </>
  );
}