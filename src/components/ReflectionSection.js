import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReflectionCard } from "./ReflectionCard";
import projImg1 from "../assets/img/videoPitch.jpg";
import projImg2 from "../assets/img/WeeklyComms.jpeg";
import projImg3 from "../assets/img/DailyMeeting.jpeg";
import { Link } from "react-router-dom";

export const ReflectionSection = () => {
    const reflectionData = [
        {
            title: "Weekly Pitch Videos",
            text: "What we learnt from users and prototyping.",
            imgURL: projImg1,
            url: "pitchvideos",
        },

        {
            title: "Daily Team Briefs",
            text: "View our daily progress updates as a team.",
            imgURL: projImg3,
            url: "teambriefs",
        },
        {
            title: "Proud Page",
            text: "Why we are proud of what we have achieved during this project.",
            imgURL: projImg2,
            url: "proud",
        },
    ];

    return (
        <section className="reflection" id="reflection">
            <Container className="reflection-container">
                <Row>
                    <Col>
                        <Row>
                            <h2>Reflections</h2>
                            {reflectionData.map((item, index) => (
                                <Col key={index} md={4}>
                                    <Link to={`${item.url}`}>
                                        <ReflectionCard
                                            title={item.title}
                                            text={item.text}
                                            imgURL={item.imgURL}
                                        />
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
