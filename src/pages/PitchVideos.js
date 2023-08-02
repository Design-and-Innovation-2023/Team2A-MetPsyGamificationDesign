import React from "react";
import { ReflectionNavBar } from "../components/ReflectionNavBar";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";

export const PitchVideos = () => {
    return (
        <>
            <ReflectionNavBar />
            <div className="pitchvideos-div-wrapper">
                <Container className="pv-container">
                    <Row>
                        <Col size={12}>
                            <div>
                                <h2>Weekly Pitch Videos</h2>

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
                                                Week 1
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                Week 2
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content id="slideInUp">
                                        <Tab.Pane eventKey="first">
                                            <iframe
                                                width="640"
                                                height="360"
                                                src="https://www.youtube.com/embed/xYzMLfYNjOs"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <iframe
                                                width="640"
                                                height="360"
                                                src="https://www.youtube.com/embed/Yi7eSGSUxxw"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
