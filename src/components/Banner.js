import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Player } from "@lottiefiles/react-lottie-player";
import healthcare from "../assets/animation/healthcare1.json";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">Team 2A</span>
                                    <h1>
                                        {`Innovative gamification methods for health coaching app`}
                                    </h1>
                                    <p>
                                        Empowering wellness through
                                        gamification. Discover how the team
                                        designed gamification coaching for
                                        metabolic psychiatry.
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <Player
                            src={healthcare}
                            className="player"
                            loop
                            autoplay
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
