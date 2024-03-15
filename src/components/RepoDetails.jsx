import start from '../assets/star.svg';

const topicsStyle = { marginBottom: '10px' };
const badgeStyle = { marginRight: '5px' };
const startStyle = {
    width: '20px',
    height: '20px',
    marginBottom: '2px',
};

/**
 * @param {{repo:import('../api/github').RepoData}} props
 */
function RepoDetails({ repo }) {
    return (
        <div className="card-body">
            <p className="card-text">{repo.description}</p>
            <div className="topics" style={topicsStyle}>
                {repo.topics.map((topic, index) => (
                    <span
                        key={index}
                        className="badge text-bg-secondary"
                        style={badgeStyle}
                    >
                        {topic}
                    </span>
                ))}
            </div>
            <p className="card-text">
                <small className="text-muted">
                    Última atualização:{' '}
                    {new Date(repo.updated_at).toLocaleString()}
                </small>
            </p>
            <p className="card-text">
                <img src={start} style={startStyle} />: {repo.stargazers_count}
            </p>
            <p className="card-text">
                Linguagem:{' '}
                <span className="badge bg-primary">{repo.language}</span>
            </p>
        </div>
    );
}

export default RepoDetails;
