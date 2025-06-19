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
            <a className="navbar-brand col-2 me-5"><img src={logoPrincipal} style={{ width: "90%" }}/></a>
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
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1332 1176" width="333" height="294">
                        <path transform="translate(0)" d="m0 0h1332v1176h-1332z" fill="#FEFEFE"/>
                        <path transform="translate(638,96)" d="m0 0h39l38 3 32 5 30 7 29 9 24 9 29 13 24 13 21 13 16 11 16 12 11 9 14 12 16 15 9 9 7 8 13 15 12 15 13 19 10 15 15 26 12 24 11 27 12 36 7 28 5 28 3 25 1 13v58l-3 31-5 29-7 30-9 29-8 21-9 20-8 17-11 20-15 24-13 18-11 14-9 10-9 11-29 29-11 9-9 8-20 15-24 16-24 14-28 14-27 11-36 12-28 7-28 5-25 3-11 1h-58l-39-4-36-7-26-7-30-10-26-11-23-11-23-13-22-14-28-21-14-12-24-22-15-16-9-11-11-13-14-19-13-20-12-21-12-23-11-25-10-28-8-27-6-26-5-32-3-36v-37l3-37 6-35 8-32 12-36 10-24 12-25 14-25 13-20 10-14 11-14 11-13 18-20 12-12 8-7 11-10 14-11 13-10 24-16 22-13 23-12 25-11 28-10 27-8 31-7 25-4z" fill="#FEFEFE"/>
                        <path transform="translate(638,96)" d="m0 0h39l38 3 32 5 30 7 29 9 24 9 29 13 24 13 21 13 16 11 16 12 11 9 14 12 16 15 9 9 7 8 13 15 12 15 13 19 10 15 15 26 12 24 11 27 12 36 7 28 5 28 3 25 1 13v58l-3 31-5 29-7 30-9 29-8 21-9 20-8 17-11 20-15 24-13 18-11 14-9 10-9 11-29 29-11 9-9 8-20 15-24 16-24 14-28 14-27 11-36 12-28 7-28 5-25 3-11 1h-58l-39-4-36-7-26-7-30-10-26-11-23-11-23-13-22-14-28-21-14-12-24-22-15-16-9-11-11-13-14-19-13-20-12-21-12-23-11-25-10-28-8-27-6-26-5-32-3-36v-37l3-37 6-35 8-32 12-36 10-24 12-25 14-25 13-20 10-14 11-14 11-13 18-20 12-12 8-7 11-10 14-11 13-10 24-16 22-13 23-12 25-11 28-10 27-8 31-7 25-4zm13 63-31 2-29 4-31 7-26 8-24 9-33 16-14 8-19 12-19 14-11 9-15 13-24 24-9 11-8 9-14 19-11 17-12 21-9 17-12 29-11 33-6 26-5 30-2 19v53l3 29 5 28 6 24 10 30 11 26 11 22 12 20 10 15 12 16 3 1 9-15 10-14 10-13 12-14 14-15 8-7 13-12 17-13 16-11 20-12 23-12 23-10 30-10 30-7 26-4 27-2h23l29 2 27 4 30 7 30 10 21 9 24 12 20 12 20 14 16 13 11 9 23 23 9 11 12 15 12 18 7 12h3l13-19 7-10 9-15 10-18 9-19 8-20 10-30 6-25 4-21 3-23 1-17v-39l-2-24-4-27-6-27-9-30-13-32-14-28-14-23-12-17-10-13-12-14-12-13-17-17-11-9-13-11-18-13-19-12-21-12-23-11-26-10-21-7-29-7-30-5-21-2-19-1z"/>
                        <path transform="translate(648,224)" d="m0 0h24l22 3 23 7 23 11 15 10 11 9 17 17 11 15 10 18 8 20 5 19 3 26-1 22-4 23-7 21-8 17-9 14-8 10-9 10-8 8-16 12-13 8-19 9-19 6-14 3-7 1h-36l-22-4-21-7-16-8-12-7-12-9-10-9-12-12-13-18-11-21-6-17-5-21-2-17v-16l3-25 6-21 8-19 9-16 9-12 9-10 13-13 15-11 21-12 15-6 19-5z"/>
                    </svg>
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