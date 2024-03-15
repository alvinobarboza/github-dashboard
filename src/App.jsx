import Menu from './components/Menu';
import Contributors from './pages/Contributors';
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
                    <Route
                        path="/contributors/:owner/:repo"
                        element={<Contributors />}
                    />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
