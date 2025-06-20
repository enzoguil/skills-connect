const API_BASE_URL = 'https://rubiscraft.fr/api-mds/api';
const token = localStorage.getItem("token");

export const getUser = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'GET',
            headers: {
                Authorization : `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération de l'utilisateur ${id} : `, error);
        throw error;
    }
}

export const getListBlog = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/blog`, {
            method: 'GET',
            headers: {
                Authorization : `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération de l'utilisateur ${id} : `, error);
        throw error;
    }
}

export const getArticle = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/blog/${id}`, {
            method: 'GET',
            headers: {
                Authorization : `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération de l'utilisateur ${id} : `, error);
        throw error;
    }
}

export const fetchProfiles = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/profiles`, {
            method: 'GET',
            headers: {
                Authorization : `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération des profils : ", error);
        throw error;
    }
};

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/produits`, {
            method: 'GET',
            headers: {
                Authorization : `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération des produits : ", error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/produits/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération du produit ${id} : `, error);
        throw error;
    }
};

export const addProduct = async (data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/produits`, {
            method: 'POST',
            body: data,
        });

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Erreur lors de la création du produit.`);
    }
}

export const fetchCategories = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/skills`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération du produit ${id} : `, error);
        throw error;
    }
};

export const addCategory = async (data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération des commandes : `, error);
        throw error;
    }
}

export const deleteCategory = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération des commandes : `, error);
        throw error;
    }
}

export const fetchCommands = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/commands`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération des commandes : `, error);
        throw error;
    }
}

export const loginUser = async ({ mail, password }) => {
    const body = JSON.stringify({mail, password});
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body,
    });
    if (!response.ok) {
        throw new Error("Échec de la connexion.");
    }

    return await response.json();
};

export const createUser = async (firstName, lastName, email, password) => {
    const body = {
        firstName,
        lastName,
        email,
        password
    };
    const response = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error("Échec de la création du compte.");
    }

    return await response.json();
}

export const addCategoryToUser = async (userId, category) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}/skills/${category}`, {
            method: 'POST',
            headers: {
                Authorization : `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Erreur lors de l'ajout de la catégorie ${category} à l'utilisateur ${userId} : `, error);
        throw error;
    }
}

export const removeCategoryFromUser = async (userId, category) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}/skills/${category}`, {
            method: 'DELETE',
            headers: {
                Authorization : `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Erreur lors de la suppression de la catégorie ${category} de l'utilisateur ${userId} : `, error);
        throw error;
    }
}