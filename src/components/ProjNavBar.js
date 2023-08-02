import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { Outlet, Link } from "react-router-dom";

export const ProjNavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/Team2A-MetPsyGamificationDesign/">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="/Team2A-MetPsyGamificationDesign/"
                                className="navbar-link"
                            >
                                Home
                            </Nav.Link>
                            <div className="dropdown">
                                <Nav.Link
                                    href="#project"
                                    className="navbar-link"
                                >
                                    Design Journey
                                </Nav.Link>
                                <div className="dropdown-content">
                                    <Link to="/ProblemExplanation">
                                        Problem Explanation
                                    </Link>
                                    <Link to="/IdeaEvolution">
                                        Idea Evolution
                                    </Link>
                                    <Link to="/FinalDesign">Final Design</Link>
                                </div>
                            </div>
                            <Nav.Link
                                href="/Team2A-MetPsyGamificationDesign/"
                                className="navbar-link"
                            >
                                Poster
                            </Nav.Link>
                            <div className="dropdown">
                                <Nav.Link
                                    href="#reflection"
                                    className="navbar-link"
                                >
                                    Reflections
                                </Nav.Link>
                                <div className="dropdown-content">
                                    <Link to="/pitchvideos">Pitch Videos</Link>

                                    <Link to="/teambriefs">Team Briefs</Link>
                                </div>
                            </div>
                            <Nav.Link
                                href="/Team2A-MetPsyGamificationDesign"
                                className="navbar-link"
                            >
                                Team
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <Link to="/proud">
                                <button className="vvd">
                                    <span>Proud</span>
                                </button>
                            </Link>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};
