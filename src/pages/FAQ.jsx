import React, { useState, useEffect } from 'react';
import { getListBlog } from '../services/api';
import { Link, useParams } from "react-router-dom";
import ArticlePreview from '../components/ArticlePreview';

const faqData = [
	{
		question: "Pourquoi l’entraide entre étudiants est-elle indispensable ?",
		answer: `En tant qu’étudiant, tu as probablement déjà ressenti le stress des examens, des stages ou des projets à rendre. Savoir où chercher du soutien peut faire toute la différence. D’après un constat récurrent des animatrices pédagogiques des écoles et un sondage réalisé sur les 5 écoles montrent que les étudiants ne se connaissent pas et qu’ils ont ont besoin de commencer leurs réseaux.`,
	},
	{
		question: "Puis-je modifier mes compétences une fois inscrit(e) ?",
		answer: `Oui, votre profil est totalement flexible. Vous pouvez le modifier à tout moment en ajoutant de nouvelles compétences, en retirant celles qui ne vous représentent plus, ou en mettant à jour votre bio, vos projets passés ou vos envies du moment. Nous savons que vous évoluez rapidement dans votre parcours d’étudiant, c’est pourquoi l’appli vous permet de refléter votre progression en temps réel, sans aucune limite.`,
	},
	{
		question: "Comment fonctionne le système de mise en relation ?",
		answer: `Notre application vous met en relation avec d’autres étudiants de votre campus en croisant vos compétences, vos besoins et vos centres d’intérêt. Vous remplissez votre profil avec ce que vous savez faire et ce que vous recherchez (ex : un développeur pour un projet, un graphiste pour un site, etc.). L’algorithme vous propose alors des profils compatibles, que vous pouvez consulter librement ou découvrir de manière plus dynamique via le mode swipe. Le but : faciliter les connexions et encourager la collaboration sur des projets concrets ou des envies communes.`,
	},
	{
		question: "L’application est-elle réservée à certains étudiants ?",
		answer: "",
	},
	{
		question: "Comment fonctionne le mode “swipe” ?",
		answer: "",
	},
];

const FAQ = () => {
	const [openIndexes, setOpenIndexes] = useState([0, 1, 2]);
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		fetchArticles();
	}, []);

	const fetchArticles = async () => {
		try {
			setIsLoading(true);
			console.log(id);
			const data = await getListBlog();
			console.log(data);
			setArticles(data.articles);
		} catch (error) {
			console.error('Failed to fetch articles:', error);
		} finally {
			setIsLoading(false);
		}
	};

	const toggleIndex = (idx) => {
		setOpenIndexes((prev) =>
			prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
		);
	};

	return (
		<div className="container py-5">
			<h1 className="fw-bold mb-4 text-primary-dark">
				Vous avez des questions ? Nous avons les réponses !
			</h1>
            <hr className="border-2 border-primary-dark mb-5" />
			<div className="flex-1">
				{faqData.map((item, idx) => (
					<div key={idx} className="mb-2">
						<h3
							className="fw-bold mb-4 text-primary-dark"
							onClick={() => toggleIndex(idx)}
						>
							<span
								className={`font-bold ${
									idx === 3 || idx === 4
										? "text-2xl mt-8 mb-2"
										: "text-xl mt-6 mb-2"
								} text-[#23234B] flex-1`}
							>
								{item.question}
							</span>
							<span className="ml-2 text-[#BFC2D9] text-2xl">
								{openIndexes.includes(idx) ? "▾" : "▸"}
							</span>
						</h3>
						{openIndexes.includes(idx) && item.answer && (
							<div className="text-[#23234B] text-base mt-1 mb-2 pr-8">
								{item.answer}
							</div>
						)}
						<div className="border-b-4 border-[#1DE9B6] w-full mt-4 mb-2" />
                        <hr className="border-2 border-primary-dark mb-5" />
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;