import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="ms-5 me-5 footer border-top border-gray">
            <div className="footer-content mt-3">
                <nav className="footer-nav">
                    <Link className="text-decoration-none ms-3 me-3 text-black" to="/home">A propos</Link>
                    <Link className="text-decoration-none me-3 text-black" to="/produits">Contact</Link>
                    <Link className="text-decoration-none text-black" to="/login">Politique de confidentialité</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;