import { Link } from "react-router-dom";
import etudiantsImg from '../../public/assets/etudiants_entraide.png';
import profilsImg from '../../public/assets/3 profils landing page.png';
import profilLikeImg from '../../public/assets/profil like landing page.png';

const Home = () => {
    return (
        <>
        <main className="main-home">
                <section id="hero" className="container my-5">
                    <div className="row">
                        <div className="col-6">
                            <h2>La plateforme qui connecte les étudiants</h2>
                            <p>Ici, chaque profil est une opportunité. Parcourez les compétences de vos camarades de campus, découvrez des parcours variés, échangez avec des étudiants passionnés, et trouvez en quelques clics les partenaires idéaux pour vos projets scolaires ou personnels !</p>
                            <p>Que vous ayez besoin d’un développeur, d’un graphiste, d’un communicant ou d’un stratège, Skills Connect vous met en relation rapidement, simplement, et avec des personnes motivées.</p>
                        </div>
                        <img className="col-4" src={etudiantsImg} style={{ width: "40%", height: "20%" }} alt="Étudiants" />
                    </div>
                </section>

                <section id="skills" className="container my-5">
                    <div className="row">
                        <img className="col-4" src={profilsImg} style={{ width: "35%", height: "20%" }} alt="Profils" />
                        <div className="col-6">
                            <h2>Découvrez les talents de votre campus</h2>
                            <p>Et si la personne qu’il manquait à votre projet était juste à côté de vous ?</p>
                            <p>Skills Connect vous permet de visualiser les profils des étudiants autour de vous, et de voir leurs compétences.</p>
                            <p>Ciblez le type de profil que vous recherchez et découvrez en quelques secondes qui pourrait être le partenaire idéal pour réaliser votre projet !</p>
                            <Link to={"/discover"}><button className="btn btn-danger">Voir les différents profils !</button></Link>
                        </div>
                    </div>
                </section>

                <section id="swipe" className="container my-5">
                    <div className="row" style={{ position: "relative" }}>
                        <div className="col-6">
                            <h2>Et si faire équipe était aussi simple que de swiper ?</h2>
                            <p>Le mode Découverte de Skills Connect rend la recherche de collaborateurs plus fluide et intuitive que jamais.</p>
                            <p>Faites glisser à droite pour montrer votre intérêt, à gauche pour passer. C’est rapide, spontané et surtout… efficace !</p>
                            <p>Le profil que vous swiperez aujourd’hui pourrait bien être votre coéquipier de demain.</p>
                        </div>
                        <img
                            className="col-4"
                            src={profilLikeImg}
                            style={{
                                width: "20%",
                                minWidth: 220,
                                maxWidth: 350,
                                position: "absolute",
                                right: 100,
                                top: "50%",
                                transform: "translateY(-50%)"
                            }}
                            alt="Profil swipe"
                        />
                    </div>
                    <Link to={"/swipe"}><button className="btn btn-danger">Je swipe !</button></Link>
                </section>

                <section id="blog-faq" className="container my-5">
                    <div className="row">
                        <div className="col-6" id="blog">
                            <h2 className="border-green-bottom mb-4">Découvrez notre blog</h2>
                            <p>Conseils, astuces, témoignages d’étudiants, actualités du campus… Plongez dans notre blog pour faire le plein d’inspiration et booster vos projets !</p>
                            <Link to={"/blog"}><button className="btn button-green text-white">Voir le blog</button></Link>
                        </div>
                        <div className="col-6" id="faq">
                            <h2 className="border-green-bottom mb-4">Besoin d'aide ?</h2>
                            <p>Notre FAQ est là pour répondre à toutes vos questions ! Trouvez rapidement les réponses dont vous avez besoin pour utiliser SkillMate en toute simplicité.</p>
                            <Link to={"/swipe"}><button className="btn button-green text-white">Accéder à la F.A.Q</button></Link>
                        </div>
                    </div>
                </section>
        </main>        
        </>
    );
};

export default Home;