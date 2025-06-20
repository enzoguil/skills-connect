import { useNavigate, Link } from "react-router-dom";
import React, { useState  } from "react";
import { loginUser } from "../services/api";

const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (element) => {
        element.preventDefault();

        try {
            const response = await loginUser({mail, password});

            if (response) {
                localStorage.setItem("token", response.token)
                localStorage.setItem("user", JSON.stringify(response.user));
                window.location.href = './discover';
            }
        } catch (error) {
            setError("Identifiants incorrects.");
        }
    };

    return(
        <main className="container text-center mt-5 mb-5">
            <div className="row">
                <div className="col">
                    <h1>Se connecter</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input placeholder="Adresse mail" type="email" className="form-control" id="email" onChange={(element) => setMail(element.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input placeholder="Mot de passe" type="password" className="form-control" id="password" onChange={(element) => setPassword(element.target.value)}/>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;