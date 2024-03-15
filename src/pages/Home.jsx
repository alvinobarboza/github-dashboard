import { useEffect, useState } from 'react';
import { getOwnRepos } from '../api/github.js';
import RepoCard from '../components/RepoCard.jsx';

function Home() {
    /** @type {[import('../api/github.js').RepoData[], React.Dispatch<import('../api/github.js').RepoData[]>]} */
    const [ownRepos, setOwnRepos] = useState([]);

    useEffect(() => {
        getOwnRepos().then((data) => setOwnRepos(data));
    }, []);

    return (
        <>
            {ownRepos.map((repo) => {
                return <RepoCard key={repo.id} repo={repo} />;
            })}
        </>
    );
}

export default Home;
