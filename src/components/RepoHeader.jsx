const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
};
const profileImgStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    marginRight: '15px',
};

/**
 * @param {{repo:import('../api/github').RepoData, onClick: ()=> void}} props
 */
function RepoHeader({ repo, onClick }) {
    return (
        <div className="card-header" style={cardHeaderStyle} onClick={onClick}>
            <img
                src={repo.owner.avatar_url}
                alt="Profile Picture"
                className="profile-img"
                style={profileImgStyle}
            />
            <h5 className="card-title">
                <span className="text-muted">{repo.owner.login}/</span>
                {repo.name}
            </h5>
        </div>
    );
}

export default RepoHeader;
