import React, { useRef, useEffect } from "react";
import BaseProfile from "../components/BaseProfile";
import { fetchProfiles, fetchCategories } from "../services/api";

export default function Discover() {
  const [profiles, setProfiles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const filterRef = useRef();

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProfiles();
        setProfiles(data);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  React.useEffect(() => {
    const loadCategories = async () => {
      try {
        const cats = await fetchCategories();
        setCategories(cats);
      } catch {
        setCategories([]);
      }
    };
    loadCategories();
  }, []);

  // Fermer la dropdown si clic en dehors
  useEffect(() => {
    if (!filterOpen) return;
    const handleClick = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [filterOpen]);

  const handleCategoryChange = (catName) => {
    setSelectedCategories((prev) =>
      prev.includes(catName)
        ? prev.filter((c) => c !== catName)
        : [...prev, catName]
    );
  };

  // Filtrage des profils selon les catégories sélectionnées
  const filteredProfiles =
    selectedCategories.length === 0
      ? profiles
      : profiles.filter((profile) =>
          profile.skills?.some((skill) => selectedCategories.includes(skill))
        );

  if (loading) {
    return <div className="container py-5">Chargement des profils...</div>;
  }
  if (profiles.length === 0) {
    return <div className="container py-5">Aucun profil trouvé.</div>;
  }
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-primary-dark">
        Découvrez de nouveaux profils !
      </h2>
      <hr className="border-2 border-primary-dark mb-5" />

      {/* Filtres compétences */}
      <div className="mb-4" style={{ position: "relative", zIndex: 20 }} ref={filterRef}>
        <div className="inline-block">
          <button
            className="fw-semibold text-teal px-3 py-2 rounded bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition flex items-center gap-2"
            onClick={() => setFilterOpen((open) => !open)}
            type="button"
          >
            Rechercher une compétence
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M6 8l4 4 4-4"
                stroke="#23234B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {filterOpen && (
            <div
              className="absolute bg-white border border-gray-200 rounded shadow-lg p-2"
              style={{
                minWidth: 180,
                maxWidth: 220,
                width: 200,
                top: "110%",
                left: 0,
                display: "flex",
                flexDirection: "column",
                maxHeight: 80, // Pour test : 2 compétences visibles, le reste en scroll
                overflowY: "auto",
              }}
            >
              {categories.length === 0 && (
                <div className="text-gray-400 text-sm">Aucune compétence</div>
              )}
              {categories.map((cat, i) => (
                <label
                  key={cat.id ?? i}
                  className="flex items-center gap-2 py-1 cursor-pointer select-none"
                  style={{ width: "100%" }}
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.name)}
                    onChange={() => handleCategoryChange(cat.name)}
                    className="form-check-input"
                  />
                  <span>{cat.name}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="row g-4">
        {filteredProfiles.map((profile) => (
          <div className="col-md-4 col-6" key={profile.id}>
            <BaseProfile
              name={profile.lastName.toUpperCase() + " " + profile.firstName}
              tags={profile.skills}
              email={profile.email}
              rating={profile.note}
              reviews={profile.nb_review}
            />
          </div>
        ))}
      </div>

      <hr className="mt-5 mb-3 border-2 border-primary-dark" />
      <div className="text-center mb-2">
        <button className="btn btn-link text-dark fw-semibold">
          Voir plus de profils
        </button>
      </div>
    </div>
  );
}