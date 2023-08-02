import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
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

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

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
                                href="#home"
                                className={
                                    activeLink === "home"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("home")}
                            >
                                Home
                            </Nav.Link>
                            <div className="dropdown">
                                <Nav.Link
                                    href="#project"
                                    className={
                                        activeLink === "project"
                                            ? "active navbar-link"
                                            : "navbar-link"
                                    }
                                    onClick={() =>
                                        onUpdateActiveLink("project")
                                    }
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
                                href="#poster"
                                className={
                                    activeLink === "poster"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("poster")}
                            >
                                Poster
                            </Nav.Link>
                            <div className="dropdown">
                                <Nav.Link
                                    href="#reflection"
                                    className={
                                        activeLink === "reflection"
                                            ? "active navbar-link"
                                            : "navbar-link"
                                    }
                                    onClick={() =>
                                        onUpdateActiveLink("reflection")
                                    }
                                >
                                    Reflections
                                </Nav.Link>
                                <div className="dropdown-content">
                                    <Link to="/pitchvideos">Pitch Videos</Link>

                                    <Link to="/teambriefs">Team Briefs</Link>
                                </div>
                            </div>
                            <Nav.Link
                                href="#team"
                                className={
                                    activeLink === "team"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("team")}
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
