import React from 'react';
import './newsTiles.css';

const NewsTiles = ({ articles, topRead }) => {
    return (
        <div className="news-tiles-container">
            {/* News Tiles Section */}
            <div className="news-tiles">
                {articles.map((article) => (
                    <div key={article._id} className="news-tile">
                        <img src={article.thumbnail} alt={article.title} className="tile-thumbnail" />
                        <h3 className="tile-title">{article.title}</h3>
                        <p className="tile-description">{article.description.substring(0, 100)}...</p>
                        <div className="tile-author-date">
                            <p className="tile-author">{article.author}</p>
                            <p className="tile-date">{formatDate(article.createdAt)}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Top Read News Section */}
            <div className="top-read">
                <h3>Top Read</h3>
                <ul>
                    {topRead.map((article) => (
                        <li key={article._id} className="top-read-item">
                            {article.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export default NewsTiles;
