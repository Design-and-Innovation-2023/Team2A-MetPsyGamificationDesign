import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjNavBar } from "../components/ProjNavBar";

export const ProblemExplanation = () => {
    return (
        <>
            <ProjNavBar />
            <div className="problem-div-wrapper">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={8} className="proud-col">
                            {/* <img src={LogoImage} alt="Logo" className="logo" /> */}
                            <h2 className="mb-4">
                                MetPsy’s Gamification System
                            </h2>
                            <h3
                                className="mb-5"
                                style={{
                                    fontStyle: "italic",
                                    color: "black",
                                    fontSize: 18,
                                }}
                            >
                                Innovative gamification methods for health
                                coaching app
                            </h3>
                            <h4
                                style={{ color: "black", marginBottom: "1rem" }}
                            >
                                {" "}
                                Context{" "}
                            </h4>
                            <p style={{ marginBottom: "1rem" }}>
                                MetPsy is a cohort based online coaching
                                platform recently launched by coaches Rachel
                                Brown and Ally Houston. They are trained in the
                                latest research and techniques in metabolic
                                psychiatry (hence, named MetPsy). They develop
                                personalised plans for people which includes
                                dietary and lifestyle changes to help restore
                                balance to their body’s metabolism and improve
                                their mental health.
                            </p>

                            <h4
                                style={{ color: "black", marginBottom: "1rem" }}
                            >
                                {" "}
                                Problem{" "}
                            </h4>
                            <p style={{ marginBottom: "1rem" }}>
                                Rachel and Ally want to engage the cohort beyond
                                the live online sessions and events. They have
                                been approached by healthcare professionals
                                about having a free app version of the platform.
                            </p>

                            <p style={{ marginBottom: "1rem" }}>
                                Your challenge is to design an innovative
                                gamification system for the MetPsy app that
                                keeps users engaged beyond the lecture and
                                peer-learning to make sure they benefit fully
                                from the app.
                            </p>

                            <p style={{ marginBottom: "1rem" }}>
                                Gamification should include recognised mood
                                scales (see resources) and relevant biological
                                measurements including ketone, glucose, and
                                lactate levels. These scales and measurements
                                should feed back into the functionality of the
                                platform to ensure real world effect.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
