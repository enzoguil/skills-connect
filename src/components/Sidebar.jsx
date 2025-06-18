import { Link } from "react-router-dom";
import iconeAccueil from '../../public/assets/icone accueil.png';
import iconeDecouverte from '../../public/assets/icone_decouverte.png';
import iconeSwipe from '../../public/assets/icone swipe.png';
import iconeAnnonces from '../../public/assets/icone annonce.png';
import iconeBlog from '../../public/assets/icone blog.png';
import iconeFAQ from '../../public/assets/icone faq.png';

const Sidebar = () => {
    let user = localStorage.getItem("user");
    console.log(user);
    const token = localStorage.getItem("token");
    if(!user || user == 'undefined' || !token) {
        return (
            <></>
        );
    }
    user = JSON.parse(user);
    return (
        <nav class="sidebar d-flex flex-column align-items-center py-4">
            <Link className="nav-link me-5" to="/">
                <img src={iconeAccueil} alt="Logo" />
            </Link>
            <Link className="nav-link me-5" to="/discover">
                <img src={iconeDecouverte} alt="Logo" width="32" height="32" />
            </Link>
            <Link className="nav-link me-5" to="/swipe">
                <img src={iconeSwipe} alt="Logo" width="32" height="32" />
            </Link>
            <Link className="nav-link me-5" to="/">
                <img src={iconeAnnonces} alt="Logo" width="32" height="32" />
            </Link>
            <Link className="nav-link me-5" to="/blog">
                <img src={iconeBlog} alt="Logo" width="32" height="32" />
            </Link>
            <Link className="nav-link me-5" to="/faq">
                <img src={iconeFAQ} alt="Logo" width="32" height="32" />
            </Link>
        </nav>
    );
};

export default Sidebar;