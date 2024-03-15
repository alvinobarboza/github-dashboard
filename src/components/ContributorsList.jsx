import ContributorItem from './ContributorItem.jsx';

/**@param {{contributors: import('../api/github.js').User[]}} props*/
function ContributorsList({ contributors }) {
    return (
        <div className="container" style={{ marginTop: '10px' }}>
            <ul className="list-group">
                {contributors.map((contributor) => {
                    return (
                        <ContributorItem
                            key={contributor.id}
                            contributor={contributor}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default ContributorsList;
