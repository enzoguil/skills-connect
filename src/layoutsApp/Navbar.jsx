import { Link } from "react-router-dom";

const Navbar = () => {
    let user = localStorage.getItem("user");
    console.log(user);
    const token = localStorage.getItem("token");
    if(!user || user == 'undefined' || !token) {
        return (
            <nav className="ms-5 me-5 navbar border-bottom border-gray">
                <div className="container">
                    <div className="row justify-content-between">
                        <a className="navbar-brand col-4"><img src="/assets/logo_principal.png" style={{ width: "40%" }}/></a>
                        <div class="col-4">
                            <Link className="btn btn-light nav-link" aria-current="page" href="#">Accueil</Link>
                            <Link className="nav-link text-white" to="/sign-up">Découverte</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
    user = JSON.parse(user);
    return (
        <nav className="ms-5 me-5 navbar border-bottom border-gray">
            <div className="container">
                <div className="row justify-content-between">
                    <a className="navbar-brand col-4"><img src="/assets/logo_principal.png" style={{ width: "40%" }}/></a>
                    <div class="col-4">
                        <Link className="btn btn-light nav-link" aria-current="page" href="#">Accueil</Link>
                            <Link className="nav-link text-white" to="/sign-up">Découverte</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;