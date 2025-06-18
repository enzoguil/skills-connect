import { Link } from "react-router-dom";
import logoPrincipal from '../../public/assets/logo_principal.png';

const Navbar = () => {
    let user = localStorage.getItem("user");
    console.log(user);
    const token = localStorage.getItem("token");
    if(!user || user == 'undefined' || !token) {
        return (
            <nav className="ms-5 me-5 navbar border-bottom border-gray">
                <div className="container">
                    <div className="row justify-content-between">
                        <a className="navbar-brand col-4"><img src={logoPrincipal} style={{ width: "40%" }}/></a>
                        <form class="col-4" role="search">
                            <button className="btn btn-light"><Link className="btn btn-light nav-link" aria-current="page" to="/login">Se connecter</Link></button>
                            <button className="btn btn-danger"><Link className="nav-link text-white" to="/sign-up">S'inscrire</Link></button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
    user = JSON.parse(user);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand col-2 me-5"><img src="/assets/logo_principal.png" style={{ width: "90%" }}/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <Link className="nav-link me-5" aria-current="page" to="/">Accueil</Link>
                <Link className="nav-link me-5" to="/discover">Découverte</Link>
                <Link className="nav-link me-5" to="/swipe">Voir les profils</Link>
                <Link className="nav-link me-5" to="/sign-up">Annonces</Link>
                <Link className="nav-link me-5" to="/blog">Blog</Link>
                <Link className="nav-link me-5" to="/faq">F.A.Q</Link>
                <span class="navbar-text">
                Navbar text with an inline element
                </span>
            </div>
        </nav>
        // <nav className="ms-5 me-5 navbar border-bottom border-gray">
        //     <div className="container">
        //         <div className="row justify-content-between">
        //             <a className="navbar-brand col-4"><img src="/assets/logo_principal.png" style={{ width: "40%" }}/></a>
        //             <div class="col-6 container">
        //                 <div className="row">
        //                     <Link className="nav-link col-3" aria-current="page" href="#">Accueil</Link>
        //                     <Link className="nav-link col-3" to="/sign-up">Découverte</Link>
        //                     <Link className="nav-link col-3" to="/sign-up">Voir les profils</Link>
        //                     <Link className="nav-link col-3" to="/sign-up">Annonces</Link>
        //                     <Link className="nav-link col-3" to="/sign-up">Blog</Link>
        //                     <Link className="nav-link col-3" to="/sign-up">F.A.Q</Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default Navbar;