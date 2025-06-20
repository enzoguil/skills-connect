import { useNavigate, Link } from "react-router-dom";
import React, { useState  } from "react";
import { createUser } from "../services/api";
import loupeVerte from '../../public/assets/loupe-verte.png';
import mainsOranges from '../../public/assets/mains-oranges.png';
import fuseeRose from '../../public/assets/fusee-rose.png';

const SignUp = () => {
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' || type === 'radio' ? checked : value
        });
    };

    const handleSubmit = async (element) => {
        element.preventDefault();
        if(formData.password !== formData.confirm_password) {
            setError("Les mots de passe ne correspondent pas.");
            console.log("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            console.log(formData);
            console.log("Création de l'utilisateur : ", formData.firstName, formData.lastName, formData.email, formData.password);
            const response = await createUser(formData.firstName, formData.lastName, formData.email, formData.password);

            if (response) {
                localStorage.setItem("token", response.token)
                localStorage.setItem("user", JSON.stringify(response.user));
                console.log(response.user);
                window.location.href = "./#/compte/"+response.user.id;
            }
        } catch (error) {
            setError("Identifiants incorrects.");
        }
    };

    return(
        <main className="container text-center mt-5 mb-5 blue-text">
            <div className="row">
                <div className="col text-start">
                    <h2><strong>Parce que chaque idée<br/>mérite la bonne équipe</strong></h2>
                    <p><strong>Rejoignez Skills Connect et découvrez les profils qui feront avancer vos projets</strong></p>
                    <button className="btn btn-danger pe-4 ps-4"><Link to="/sign-up" className="text-white text-decoration-none">Se connecter</Link></button>
                    <div className="row mt-5">
                        <div className="col">
                            <img src={loupeVerte} alt="skills" className="img-fluid rounded mx-auto d-block mb-2" style={{ width: "30%" }}/>
                            <p className="text-center"><strong>Recherchez des compétences</strong></p>
                        </div>
                        <div className="col mt-n5">
                            <img src={mainsOranges} alt="skills" className="img-fluid rounded mx-auto d-block mb-2" style={{ width: "35%" }}/>
                            <p className="text-center"><strong>Créez des connexions</strong></p>
                        </div>
                        <div className="col">
                            <img src={fuseeRose} alt="skills" className="img-fluid rounded mx-auto d-block mb-2" style={{ width: "30%" }}/>
                            <p className="text-center"><strong>Menez à bien vos projets</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h2 className="text-start"><strong>S'inscrire</strong></h2>
        
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                            <div className="col">
                                <input onChange={handleInputChange} placeholder="Prénom" type="text" className="form-control" id="exampleInputEmail1" name="firstName"/>
                            </div>
                            <div className="col">
                                <input onChange={handleInputChange} placeholder="Nom" type="text" className="form-control" id="exampleInputEmail1" name="lastName"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <input onChange={handleInputChange} placeholder="Adresse mail" type="email" className="form-control" id="email" name="email"/>
                        </div>
                        <div className="mb-3">
                            <input onChange={handleInputChange} placeholder="Mot de passe" type="password" className="form-control" id="password" name="password"/>
                        </div>
                        <div className="mb-3">
                            <input onChange={handleInputChange} placeholder="Confirmer le mot de passe" type="password" className="form-control" id="confirm_password" name="confirm_password"/>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" className="btn btn-danger ps-5 pe-5">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default SignUp;