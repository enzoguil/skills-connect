import React from 'react';
import { getArticle, getListBlog } from '../services/api';

import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

const Article = () => {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
            fetchArticle();
        }, []);
        
        const fetchArticle = async () => {
        
            try {
                setIsLoading(true);
                console.log(id);
                const data = await getArticle();
                console.log(data);
                setArticle(data.article);
            } catch (error) {
                console.error('Failed to fetch articles:', error);
            } finally {
                setIsLoading(false);
            }
        };

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Article;