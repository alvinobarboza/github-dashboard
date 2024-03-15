import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContributors, getRepo } from '../api/github.js';
import RepoCard from '../components/RepoCard.jsx';
import ContributorsList from '../components/ContributorsList.jsx';

function Contributors() {
    const { owner, repo } = useParams();

    /** @type {[import('../api/github.js').RepoData, React.Dispatch<import('../api/github.js').RepoData>]} */
    const [repoData, setRepoData] = useState(null);

    /** @type {[import('../api/github.js').User[], React.Dispatch<import('../api/github.js').User[]>]} */
    const [contributors, setContributors] = useState(null);

    useEffect(() => {
        getRepo(owner, repo).then((data) => setRepoData(data));
        getContributors(owner, repo).then((data) => setContributors(data));
    }, [owner, repo]);

    return (
        <div>
            {!repoData && (
                <div className="container">
                    <h1>Não encontrado</h1>
                </div>
            )}
            {repoData && (
                <RepoCard
                    key={repo.id}
                    repo={repoData}
                    showDetails={false}
                    clickEnabled={false}
                />
            )}
            {contributors && <ContributorsList contributors={contributors} />}
        </div>
    );
}

export default Contributors;
