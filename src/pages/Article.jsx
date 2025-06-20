import React from 'react';
import { getArticle, getListBlog } from '../services/api';

import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

const Article = () => {
    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
            fetchArticle();
        }, []);
        
        const fetchArticle = async () => {
        
            try {
                setIsLoading(true);
                console.log(id);
                const data = await getArticle(id);
                console.log(data);
                setArticle(data.article);
                setComments(data.comments || []);
            } catch (error) {
                console.error('Failed to fetch articles:', error);
            } finally {
                setIsLoading(false);
            }
        };

    return (
        <div className="container py-5">
            <Link to="/blog" className="btn btn-outline-teal mb-4">Retour aux articles</Link>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <h4>Commentaires</h4>
            {comments && comments.length > 0 ? (
                <ul className="list-unstyled">
                    {comments.map((comment, index) => (
                        <li key={index} className="mb-3">
                            <strong>{comment.lastName} {comment.firstName}:</strong> {comment.content}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun commentaire pour cet article.</p>
            )}
        </div>
    );
};

export default Article;