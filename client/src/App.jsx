import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import { SinglePost } from './components'; // Import the SinglePost component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/article/:id" element={<SinglePost />} />
            </Routes>
        </Router>
    );
}

export default App;
