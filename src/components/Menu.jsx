import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Seus repositórios
                </Link>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/search">
                        Procurar outros
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
