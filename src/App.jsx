import Menu from './components/Menu';
import Home from './pages/Home';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
