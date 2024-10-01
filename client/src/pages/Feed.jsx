import { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from '../components';

const Feed = () => {
     const [news, setNews] = useState([]);
     const [error, setError] = useState(null);

     const fetchNews = async () => {
          try {
               const response = await axios.get('/api/v1/news');
               setNews(response.data);
               console.log(response.data)
          } catch (err) {
               setError('Error fetching news: ' + err.message);
               console.error(err);
          }
     };

     useEffect(() => {
          fetchNews();
     }, []);

     return (
          <div className="feed">
               {error && <p>{error}</p>}
               {news.length > 0 ? (
                    news.map(item => (
                         <Article key={item._id} article={item} />
                    ))
               ) : (
                    <p>No news available.</p>
               )}
          </div>
     );
};

export default Feed;
