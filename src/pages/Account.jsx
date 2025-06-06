import { Link } from "react-router-dom";

//appel api pour récupérer le compte
import { useEffect, useState } from "react";
import { getUser } from "../services/api";

import { useParams } from "react-router-dom";

const Account = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {

        try {
            setIsLoading(true);
            console.log(id);
            const data = await getUser(id);
            console.log(data);
            setUser(data);
        } catch (error) {
            console.error('Failed to fetch user:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <>
            <main className="main-account">
                <section className="account-content">
                    <h2>Mon compte</h2>
                    <p>Bienvenue sur votre compte !</p>
                    <nav className="account-nav">
                        <Link to="/compte/mes-informations">Mes informations</Link>
                        <Link to="/compte/mes-commandes">Mes commandes</Link>
                        <Link to="/compte/mes-adresses">Mes adresses</Link>
                        <Link to="/compte/mes-favoris">Mes favoris</Link>
                    </nav>
                </section>
            </main>
        </>
    );
};

export default Account;