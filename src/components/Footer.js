import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer">
            <footer className="py-3 mt-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="#home" className="px-2 footer-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#project" className="px-2 footer-link">
                            Design Journey
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#poster" className="px-2 footer-link">
                            Poster
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#reflection" className="px-2 footer-link">
                            Reflections
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#team" className="px-2 footer-link">
                            Team
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link to="/proud" className="px-2 footer-link">
                            Proud
                        </Link>
                    </li>
                </ul>
                <p className="text-center footer-p">MetPsy</p>
            </footer>
        </div>
    );
};
