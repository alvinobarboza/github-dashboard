import { useState } from 'react';
import { searchRepos } from '../api/github.js';
import RepoCard from '../components/RepoCard.jsx';

function Search() {
    /**@type {[string, React.Dispatch<string>]} */
    const [search, setSearch] = useState('');

    /** @type {[import('../api/github.js').RepoData[], React.Dispatch<import('../api/github.js').RepoData[]>]} */
    const [repoResult, setRepoResult] = useState([]);

    /**@param {Event} e*/
    const handleSubmit = (e) => {
        e.preventDefault();

        searchRepos(search).then((data) => setRepoResult(data));
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <form className="d-flex my-4" onSubmit={handleSubmit}>
                        <input
                            value={search}
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <div id="search-results">
                        {repoResult.length === 0 && <h1>Nenhum resultado</h1>}
                        {repoResult.map((repo) => {
                            return (
                                <RepoCard
                                    key={repo.id}
                                    repo={repo}
                                    showDetails={false}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
