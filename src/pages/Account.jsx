import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { addCategoryToUser, deleteCategory, fetchCategories, getUser, removeCategoryFromUser } from "../services/api";
import { useParams } from "react-router-dom";

const Account = () => {
    const [user, setUser] = useState({});
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [tags, setTags] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchUser();
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            setIsLoading(true);
            const data = await fetchCategories(id);
            setCategories(data);
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const fetchUser = async () => {
        try {
            setIsLoading(true);
            const data = await getUser(id);
            setUser(data);
            setTags(data.skills || []);
        } catch (error) {
            console.error('Failed to fetch user:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const [selectedTag, setSelectedTag] = useState("");

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
        removeCategoryFromUser(id, tagToRemove)
            .catch((error) => {
                console.error(`Erreur lors de la suppression de la catégorie ${tagToRemove} :`, error);
            });
    };

    const handleAddTag = (e) => {
        e.preventDefault();
        if (selectedTag && !tags.includes(selectedTag)) {
            setTags([...tags, selectedTag]);
            setSelectedTag("");
            addCategoryToUser(id, selectedTag)
                .catch((error) => {
                    console.error(`Erreur lors de l'ajout de la catégorie ${selectedTag} :`, error);
                });
        }
    };

    // On filtre les catégories dont le nom n'est pas déjà dans tags
    const availableCategories = categories.filter(cat => !tags.includes(cat.name));

    return(
        <>
            <main className="main-account">
                <div className="container mt-5" style={{ maxWidth: 600 }}>
                    <h2>Mon profil</h2>
                    <div className="mb-3">
                        <strong>Nom :</strong> {user.lastName} {user.firstName}
                    </div>
                    <div className="mb-3">
                        <strong>Email :</strong> {user?.email}
                    </div>
                    <div className="mb-3">
                        <strong>Compétences :</strong>
                        <div className="mt-2">
                            {tags.map((tag, i) => (
                                <span
                                    key={tag}
                                    className="badge swipe-badge me-2 mb-2"
                                    style={{ position: "relative", paddingRight: 22 }}
                                >
                                    {tag}
                                    <span
                                        style={{
                                            position: "absolute",
                                            right: 4,
                                            top: 2,
                                            cursor: "pointer",
                                            color: "#dc3545",
                                            fontWeight: "bold",
                                            fontSize: 16,
                                        }}
                                        title="Supprimer"
                                        onClick={() => handleRemoveTag(tag)}
                                    >
                                        ×
                                    </span>
                                </span>
                            ))}
                        </div>
                        <form className="d-flex mt-3" onSubmit={handleAddTag}>
                            <select
                                className="form-select me-2"
                                value={selectedTag}
                                onChange={(e) => setSelectedTag(e.target.value)}
                            >
                                <option value="">Ajouter une compétence...</option>
                                {availableCategories.map((cat) => (
                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                            <button className="btn btn-success" type="submit" disabled={!selectedTag}>
                                Ajouter
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Account;