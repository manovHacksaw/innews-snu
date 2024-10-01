import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './singlePost.css'; // Add your styles here

const SinglePost = () => {
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const articleId = window.location.pathname.split('/').pop(); // Get ID from URL

    const fetchArticle = async () => {
        try {
            console.log("Fetching article with ID:", articleId);
            const response = await axios.get(`/article/${articleId}`); // Fetch article by ID
            console.log("Fetched article:", response.data); // Check what you get back
            setArticle(response.data);
            console.log("Article state set:", response.data); // Check if state is being updated
        } catch (err) {
            setError('Error fetching article: ' + err.message);
            console.error(err);
        }
    };

    useEffect(() => {
        fetchArticle();
    }, [articleId]);

    if (error) return <p>{error}</p>;
    if (!article) return <p>Loading...</p>; // Show loading state

    return (
        <div className="single-post">
            <h2>{article.title}</h2>
            <img src={article.thumbnail} alt={article.title} className="article-thumbnail" />
            <p>{article.description}</p>
            <div className="article-author">
                <p>{article.author}</p>
            </div>
            {/* <p className="article-date">{formatDate(article.createdAt)}</p> */}
        </div>
    );
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return 'Invalid date'; // Handle invalid date gracefully
    }
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

export default SinglePost;
