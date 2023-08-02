import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProudNavBar } from "../components/ProudNavBar";
import teamPic from "../assets/team_img/team-pic.JPG";

export const Proud = () => {
    return (
        <>
            <ProudNavBar />
            <div className="proud-div-wrapper">
                <Container className="proud-container">
                    <Row className="justify-content-center">
                        <Col xs={12} md={8} className="proud-col">
                            <h2 className="mb-3 fw-bold">Why We're Proud</h2>
                            <p className="fst-italic">2nd Aug, 2023</p>
                            <br></br>
                            <br></br>
                            <div>
                                <h4 className="proud-h3">Project Background</h4>
                                <p>
                                Our main goal for this project was to help our client, MetPsy, 
                                gamify their current mental health coaching system to encourage user participation and retain users.
                                </p>
                                <br></br>
                                
                                <h4 className="proud-h3">Adaptability</h4>
                                <p>
                                In the first iteration of our design showed to our client Ally, 
                                he mentioned that our design was could potentially be too complicated as he was using no-code platforms for deploying his application. 
                                This was heartening to hear at first as it meant that majority of our hard work that went into designing the prototypes could no longer be used.
                                </p>
                                <br></br>
                                <p>
                                However, our group did not wanted to let the efforts go to waste and instead we researched for methods that would allow us to utilise our old design. 
                                This led to the team discovering a plugin known as Figma to WordPress in Figma, the site we used for designing our prototype, that allowed us to convert our designs into WordPress-ready pages.
                                </p>
                                <br></br>
                                <p>
                                The tenacity and ability to adapt to changes in requirements demonstrated by the team in this situation, is one of the feats 
                                <strong> We Are Proud Of.</strong>
                                </p>
                                <br></br>

                                <h4 className="proud-h3">Ideation and Solution</h4>
                                <p>
                                With gamification being the main objective of this project, the team spent a significant amount of time researching how we could gamify the process of mental health coaching. 
                                Initially, the team wanted to have each user have their own personal avatar to represent their mental health journey. 
                                However, due to the limitations of no-code we had to come up with another idea as having an avatar was not possible without having a native application. 
                                </p>
                                <br></br>
                                <p>
                                After much discussion and brainstorming, the team came up with a point system which would allow users to earn, spend and trade them. 
                                The system also included different categories of badges that could be earned or purchased. The design of this system was done with focus on driving user engagement and building a community. 
                                We then presented our ideas to Ally and received praise for the design of the system particularly, the idea of peer-to-peer point exchange and customisation of badges. 
                                </p>
                                <br></br>
                                <p>
                                Being able to meet our clients’ requirements and having ideas that impressed him, is another feat 
                                <strong> We Are Proud Of.</strong>
                                </p>
                                <br></br>

                                <h4 className="proud-h3">Team Cohesion</h4>
                                <p>
                                    One of the most inspiring aspects of our
                                    project was the cohesion and camaraderie
                                    within our team. Despite being acquaintances
                                    at best initially, we quickly adapted to
                                    each other’s working styles. Respect and
                                    open communication laid the foundation for a
                                    smooth workflow as each team member
                                    performed their roles excellently and
                                    complemented one another, ensuring the
                                    project’s success.
                                </p>
                                <br></br>
                                <p>
                                The cohesion, adaptability, and mutual support within our team, resulted in seamless collaboration, is another feat
                                <strong> We Are Proud Of.</strong>
                                </p>

                                <br></br>
                                <h4 className="proud-h3">Summary</h4>
                                <p>
                                Though this design journey spanned a short three-week period, 
                                the experiences we gained are not to be dismissed. We were challenged with short timelines, changing requirements, 
                                and application constraints, and despite all that, were able to come out on top to produce a quality gamified mental health system. 
                                </p>
                                <br></br>
                                <p>
                                A design which we can say 
                                <strong> We Are Proud Of.</strong>
                                </p>
                                <br></br>
                                
                                                            
                                <br></br>
                                <br></br>
                                <br></br>
                                <img src={teamPic} alt="Team" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
