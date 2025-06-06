import { Link } from "react-router-dom";

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
                <img src="/assets/icone accueil.png" alt="Logo" />
            </Link>
            <Link className="nav-link me-5" to="/discover">
                <img src="/assets/icone decouverte.png" alt="Logo" width="32" height="32" />
            </Link>
            <Link className="nav-link me-5" to="/swipe">
                <img src="/assets/icone swipe.png" alt="Logo" width="32" height="32" />
            </Link>
            <Link className="nav-link me-5" to="/">
                <img src="/assets/icon annonce.png" alt="Logo" width="32" height="32" />
            </Link>
            <Link className="nav-link me-5" to="/blog">
                <img src="/assets/icon blog.png" alt="Logo" width="32" height="32" />
            </Link>
            <Link className="nav-link me-5" to="/faq">
                <img src="/assets/icone faq.png" alt="Logo" width="32" height="32" />
            </Link>
        </nav>
    );
};

export default Sidebar;