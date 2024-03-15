const profileImgStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '15px',
};

/**@param {{contributor: import('../api/github.js').User}} props*/
function ContributorItem({ contributor }) {
    return (
        <li className="list-group-item">
            <img
                src={contributor.avatar_url}
                alt="Profile Picture"
                className="profile-img"
                style={profileImgStyle}
            />
            {contributor.login}
        </li>
    );
}

export default ContributorItem;
