import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import problemExplanation from "../assets/img/problem-explanation.jpg";
import ideaExplore from "../assets/img/idea-explore.jpg";
import chosenIdea from "../assets/img/chosen-idea.jpg";
import "animate.css";
import { Link } from "react-router-dom";

export const Project = () => {
    return (
        <section className="project" id="project">
            <Container className="project-container">
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Design Journey</h2>
                            <p>
                                Embark on an inspiring design journey: Unveiling
                                Challenges, Innovations, and Our Impactful
                                Solution
                            </p>
                            <div className="project-tab-wrapper">
                                <Tab.Container
                                    id="projects-tabs"
                                    defaultActiveKey="first"
                                >
                                    <Nav
                                        variant="pills"
                                        className="nav-pills mb-5 justify-content-center align-items-center"
                                        id="pills-tab"
                                    >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                Problem Explanation
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                Idea Evolution
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                Final Design
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content id="slideInUp">
                                        <Tab.Pane eventKey="first">
                                            <div className="item">
                                                <img
                                                    src={problemExplanation}
                                                    alt="Problem Explanation"
                                                    className="project-image"
                                                />
                                            </div>
                                            <p
                                                style={{
                                                    textAlign: "justify",
                                                    textJustify: "inter-word",
                                                    maxWidth: "100em",
                                                }}
                                            >
                                                MetPsy's Gamification System
                                                addresses the need for user
                                                engagement beyond live sessions
                                                on the MetPsy online coaching
                                                platform.
                                            </p>
                                            <p
                                                style={{
                                                    textAlign: "justify",
                                                    textJustify: "inter-word",
                                                    maxWidth: "100em",
                                                }}
                                            >
                                                Coaches Rachel Brown and Ally
                                                Houston aim to develop a free
                                                app version of MetPsy that
                                                incorporates a gamification
                                                system. This system will utilize
                                                mood scales and biological
                                                measurements like ketone,
                                                glucose, and lactate levels to
                                                enhance the platform's
                                                effectiveness in improving
                                                users' mental health and
                                                metabolic well-being. To achieve
                                                this, understanding MetPsy's
                                                audience, motivations,
                                                willingness to share
                                                information, legal
                                                considerations, success metrics,
                                                and studying successful
                                                biofeedback apps will inform the
                                                design of the gamification
                                                system.
                                            </p>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    marginTop: "1rem",
                                                }}
                                            >
                                                <Link
                                                    to="/ProblemExplanation"
                                                    className="project-link"
                                                >
                                                    <button className="learn-more">
                                                        <span
                                                            className="circle"
                                                            aria-hidden="true"
                                                        >
                                                            <span className="icon arrow"></span>
                                                        </span>
                                                        <span className="button-text">
                                                            Learn More
                                                        </span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="item">
                                                <img
                                                    src={ideaExplore}
                                                    alt="Idea Evolution"
                                                    className="project-image"
                                                />
                                            </div>

                                            <p>
                                                Dive deeper and find out more
                                                about the different ideas the
                                                team has explored throughout the
                                                week.
                                            </p>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    marginTop: "1rem",
                                                }}
                                            >
                                                <Link
                                                    to="/IdeaEvolution"
                                                    className="project-link"
                                                >
                                                    <button className="learn-more">
                                                        <span
                                                            className="circle"
                                                            aria-hidden="true"
                                                        >
                                                            <span className="icon arrow"></span>
                                                        </span>
                                                        <span className="button-text">
                                                            Learn More
                                                        </span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div className="item">
                                                <img
                                                    src={chosenIdea}
                                                    alt="Final Design"
                                                    className="project-image"
                                                />
                                            </div>
                                            <p>
                                                Discover our finalised design on
                                                how we integrated gamification
                                                aspects into MetPsy's existing
                                                app design.
                                            </p>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    marginTop: "1rem",
                                                }}
                                            >
                                                <Link
                                                    to="/FinalDesign"
                                                    className="project-link"
                                                >
                                                    <button className="learn-more">
                                                        <span
                                                            className="circle"
                                                            aria-hidden="true"
                                                        >
                                                            <span className="icon arrow"></span>
                                                        </span>
                                                        <span className="button-text">
                                                            Learn More
                                                        </span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
