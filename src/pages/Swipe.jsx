import React, { useState, useEffect, useRef } from "react";
import BaseProfile from "../components/BaseProfile";
import { fetchProfiles } from "../services/api";

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Swipe() {
  const [profiles, setProfiles] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0); // index du prochain profil
  const [displayedIdx, setDisplayedIdx] = useState(0); // index du profil affiché
  const [swipe, setSwipe] = useState("none"); // "none", "left", "right"
  const [loading, setLoading] = useState(true);
  const [noMore, setNoMore] = useState(false);
  const swipedRightEmail = useRef(null);

  // Charge et mélange les profils au montage
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchProfiles();
        const shuffled = shuffleArray(data);
        setProfiles(shuffled);
        setCurrentIdx(0);
        setDisplayedIdx(0);
        setNoMore(shuffled.length === 0);
      } catch (e) {
        setProfiles([]);
        setNoMore(true);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Animation swipe (on attend la fin de l'animation avant de changer de profil)
  useEffect(() => {
    if (swipe !== "none") {
      const timer = setTimeout(() => {
        if (swipe === "right" && swipedRightEmail.current) {
          window.location.href = `mailto:${swipedRightEmail.current}`;
        }
        // Après l'animation, on change la carte affichée
        if (currentIdx + 1 >= profiles.length) {
          setNoMore(true);
        } else {
          setDisplayedIdx(currentIdx + 1);
          setCurrentIdx((idx) => idx + 1);
        }
        // On remet swipe à "none" APRÈS avoir changé la carte
        setTimeout(() => {
          setSwipe("none");
        }, 50); // petit délai pour éviter l'anim sur la nouvelle carte
      }, 600); // durée de l'animation (doit matcher la durée CSS)
      return () => clearTimeout(timer);
    }
  }, [swipe, currentIdx, profiles.length]);

  // Gestion clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (swipe !== "none" || noMore) return;
      if (e.key === "ArrowLeft") setSwipe("left");
      if (e.key === "ArrowRight") {
        swipedRightEmail.current = profiles[currentIdx]?.email;
        setSwipe("right");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [swipe, profiles, currentIdx, noMore]);

  const handleSwipe = (dir) => {
    if (swipe !== "none" || noMore) return;
    if (dir === "right") {
      swipedRightEmail.current = profiles[currentIdx]?.email;
    }
    setSwipe(dir);
  };

  // Animation classes (reprend la logique du fichier Product.jsx)
  const getCardClass = () => {
    let base = "swipe-card swipe-card-anim";
    if (swipe === "left") return base + " swipe-card-left";
    if (swipe === "right") return base + " swipe-card-right";
    return base;
  };

  return (
    <main className="swipe-container d-flex flex-column align-items-center min-h-screen py-8 px-4 bg-white">
      <h2 className="swipe-title mt-4 mb-3 text-2xl md:text-3xl font-bold text-[#23234B]">
        Swipe et construit ton équipe de rêve !
      </h2>
      <hr className="swipe-underline mb-5 border-b-4 border-[#1DE9B6] w-32" />
      <div className="swipe-card-wrapper flex flex-col items-center w-full max-w-md min-h-[400px]">
        {loading ? (
          <div className="text-lg text-gray-500">Chargement...</div>
        ) : noMore ? (
          <div className="text-lg text-gray-500 mt-16 text-center">
            Il n'y a plus de profils à afficher.
            <br />
            Reviens plus tard !
          </div>
        ) : (
          <div className="relative w-full flex justify-center">
            <div className={getCardClass()}>
              <BaseProfile
                name={
                  profiles[displayedIdx].lastName.toUpperCase() +
                  " " +
                  profiles[displayedIdx].firstName
                }
                tags={profiles[displayedIdx].skills}
                email={profiles[displayedIdx].email}
                rating={profiles[displayedIdx].note}
                reviews={profiles[displayedIdx].nb_review}
              />
            </div>
          </div>
        )}
      </div>
      {!loading && !noMore && (
        <div
          className="swipe-arrows d-flex justify-content-center align-items-center mt-4"
          style={{ gap: "5rem" }}
        >
          {/* Flèche gauche */}
          <svg
            width="70"
            height="60"
            viewBox="0 0 131.84 95.73"
            style={{ cursor: "pointer", transform: "scaleX(-1)" }}
            onClick={() => handleSwipe("left")}
          >
            <path
              d="M127.79,53.98l-38.1,37.74c-5.43,5.38-14.66,1.53-14.66-6.11v-17.11c-30.27-6.73-50.69,8.04-64.12,13.1-6.12,2.31-11.75-4.4-8.4-10.01C22.17,38.62,53.11,23.92,75.03,23.92v-13.79c0-7.65,9.23-11.5,14.66-6.12l38.1,37.74c3.4,3.37,3.4,8.86,0,12.23Z"
              fill={swipe === "left" ? "#FF4F7A" : "#FFE3EC"}
              stroke="#FF4F7A"
              strokeMiterlimit="10"
              strokeWidth="3"
            />
          </svg>
          {/* Flèche droite */}
          <svg
            width="70"
            height="60"
            viewBox="0 0 131.84 95.73"
            style={{ cursor: "pointer" }}
            onClick={() => handleSwipe("right")}
          >
            <path
              d="M127.79,53.98l-38.1,37.74c-5.43,5.38-14.66,1.53-14.66-6.11v-17.11c-30.27-6.73-50.69,8.04-64.12,13.1-6.12,2.31-11.75-4.4-8.4-10.01C22.17,38.62,53.11,23.92,75.03,23.92v-13.79c0-7.65,9.23-11.5,14.66-6.12l38.1,37.74c3.4,3.37,3.4,8.86,0,12.23Z"
              fill={swipe === "right" ? "#00BFAE" : "#EBF4F4"}
              stroke="#00BFAE"
              strokeMiterlimit="10"
              strokeWidth="3"
            />
          </svg>
        </div>
      )}
      {/* Animation CSS */}
      <style>{`
        .swipe-card {
          width: 100%;
        }
        .swipe-card-anim {
          transition: transform 0.6s cubic-bezier(.4,2,.6,1), opacity 0.6s;
        }
        .swipe-card-left {
          transform: translateX(-80%) rotate(-15deg);
          opacity: 0;
        }
        .swipe-card-right {
          transform: translateX(80%) rotate(15deg);
          opacity: 0;
        }
      `}</style>
    </main>
  );
}