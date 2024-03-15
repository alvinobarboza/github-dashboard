import { useState } from 'react';
import RepoDetails from './RepoDetails';
import RepoHeader from './RepoHeader';

const cardStyle = { marginTop: '20px' };

/**
 * @param {{repo:import('../api/github').RepoData, showDetails: boolean} props
 */
function RepoCard({ repo, showDetails = true }) {
    /**@type {[boolean, React.Dispatch<boolean>]} */
    const [show, setShow] = useState(showDetails);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div className="container">
            <div className="card" style={cardStyle}>
                <RepoHeader repo={repo} onClick={handleClick} />
                {show && <RepoDetails repo={repo} />}
            </div>
        </div>
    );
}

export default RepoCard;
