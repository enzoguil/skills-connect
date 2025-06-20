import React from 'react';
import { getListBlog } from '../services/api';

import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import ArticlePreview from '../components/ArticlePreview';

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => {
        fetchArticles();
    }, []);
    
    const fetchArticles = async () => {
    
        try {
            setIsLoading(true);
            const data = await getListBlog();
            setArticles(data.articles);
        } catch (error) {
            console.error('Failed to fetch articles:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4">
                Découvrez tous nos conseils ici !
            </h2>
            <div className="row g-5">
                {isLoading ? (
                    <div className="text-center">Chargement des articles...</div>
                ) : (
                    articles.map((article) => (
                        <ArticlePreview title={article.title} image_url="assets/photo mydi vannes.png" link={`/blog/${article.id}`}/>
                    ))
                )}
            </div>
        </div>
    );
};

export default Blog;