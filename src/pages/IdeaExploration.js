import React from "react";
import { ProjNavBar } from "../components/ProjNavBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import idea1_1 from "../assets/img/idea-1-1.png";
import idea1_2 from "../assets/img/idea-1-2.png";
import idea1_3 from "../assets/img/idea-1-3.png";
import idea1_4 from "../assets/img/idea-1-4.png";
import idea2_1 from "../assets/img/idea-2-1.jpg";
import idea2_2 from "../assets/img/idea-2-2.jpg";
import idea2_3 from "../assets/img/idea-2-3.jpg";
import idea2_4 from "../assets/img/idea-2-4.jpg";
import idea2_5 from "../assets/img/idea-2-5.jpg";
import idea3_2 from "../assets/img/idea-3-2.jpg";
import idea3_3 from "../assets/img/idea-3-3.jpg";
import idea3_4 from "../assets/img/idea-3-4.jpg";
import { Slide } from "react-awesome-reveal";
import { PhotoProvider, PhotoView } from "react-photo-view";

export const IdeaExploration = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const designs_1 = [
        {
            title: "Home Page",
            imgUrl: idea1_1,
        },
        {
            title: "Forum Page 1",
            imgUrl: idea1_2,
        },
        {
            title: "Forum Page 2",
            imgUrl: idea1_3,
        },
        {
            title: "Forum Page 3",
            imgUrl: idea1_4,
        },
    ];

    const designs_2 = [
        {
            title: "Home Page",
            imgUrl: idea2_1,
        },
        {
            title: "Challenges for Users",
            imgUrl: idea2_2,
        },
        {
            title: "Balanced Diet Challenge",
            imgUrl: idea2_3,
        },
        {
            title: "Healthy Sleep Challenge",
            imgUrl: idea2_4,
        },
        {
            title: "Exercise Challenge",
            imgUrl: idea2_5,
        },
    ];

    const designs_3 = [
        {
            title: "Home Page",
            imgUrl: idea2_1,
        },
        {
            title: "Challenges for Users",
            imgUrl: idea2_2,
        },
        {
            title: "Balanced Diet Challenge",
            imgUrl: idea2_3,
        },
        {
            title: "Healthy Sleep Challenge",
            imgUrl: idea2_4,
        },
        {
            title: "Exercise Challenge",
            imgUrl: idea2_5,
        },
        {
            title: "Forum Badges",
            imgUrl: idea3_2,
        },
        {
            title: "Subscription Plans",
            imgUrl: idea3_3,
        },
        {
            title: "User Profile",
            imgUrl: idea3_4,
        },
    ];

    return (
        <>
            <ProjNavBar />
            <section class="py-5 idea-section">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <br></br>
                        <h1 class="fw-light">Idea Evolution</h1>
                        <br></br>
                        <p class="lead text-body-primary">
                            The team apply scrum with sprint to break work into
                            goals to be completed within 2 weeks. The team
                            consulted and incorporate MetPsy's feedback with 3
                            iteration to continuously improve the prototype.
                        </p>
                    </div>
                </div>
            </section>

            <div className="ideaExploration-div-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="idea-1-div-wrapper">
                                <span className="idea-tagline">
                                    Iteration 1
                                </span>
                                <Slide>
                                    <PhotoProvider>
                                        <Carousel
                                            responsive={responsive}
                                            showDots
                                            infinite={true}
                                            className="owl-carousel owl-theme team-slider idea-carousel"
                                        >
                                            {designs_1.map((design, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="item"
                                                    >
                                                        <PhotoView
                                                            key={index}
                                                            src={design.imgUrl}
                                                        >
                                                            <img
                                                                src={
                                                                    design.imgUrl
                                                                }
                                                                alt="design-1"
                                                                className="idea-explore-img"
                                                            />
                                                        </PhotoView>
                                                        <h5 className="idea-h5">
                                                            {design.title}
                                                        </h5>
                                                    </div>
                                                );
                                            })}
                                        </Carousel>
                                    </PhotoProvider>
                                </Slide>
                                <div className="idea-p-wrapper">
                                    <p className="idea-p">
                                        The team conducted user research and
                                        competitor analysis to understand user
                                        needs and preferences.<br></br>
                                        The Tracker and Forum features have been
                                        revamped with a modern UI, enhancing
                                        aesthetics and user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="idea-2-div-wrapper">
                                <span className="idea-tagline">
                                    Iteration 2
                                </span>
                                <Slide direction="right">
                                    <PhotoProvider>
                                        <Carousel
                                            responsive={responsive}
                                            showDots
                                            infinite={true}
                                            className="owl-carousel owl-theme team-slider idea-carousel"
                                        >
                                            {designs_2.map((design, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="item"
                                                    >
                                                        <PhotoView
                                                            key={index}
                                                            src={design.imgUrl}
                                                        >
                                                            <img
                                                                src={
                                                                    design.imgUrl
                                                                }
                                                                alt="design-2"
                                                                className="idea-explore-img"
                                                            />
                                                        </PhotoView>
                                                        <h5 className="idea-h5">
                                                            {design.title}
                                                        </h5>
                                                    </div>
                                                );
                                            })}
                                        </Carousel>
                                    </PhotoProvider>
                                </Slide>
                                <div className="idea-p-wrapper">
                                    <p className="idea-p">
                                        In the second iteration, the team
                                        introduced the initial gamification
                                        concept, offering users a personalized
                                        selection of health and wellness
                                        activities to participate in and earn
                                        points.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="idea-3-div-wrapper">
                                <span className="idea-tagline">
                                    Iteration 3
                                </span>
                                <Slide>
                                    <PhotoProvider>
                                        <Carousel
                                            responsive={responsive}
                                            showDots
                                            infinite={true}
                                            className="owl-carousel owl-theme team-slider idea-carousel"
                                        >
                                            {designs_3.map((design, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="item"
                                                    >
                                                        <PhotoView
                                                            key={index}
                                                            src={design.imgUrl}
                                                        >
                                                            <img
                                                                src={
                                                                    design.imgUrl
                                                                }
                                                                alt="design-3"
                                                                className="idea-explore-img"
                                                            />
                                                        </PhotoView>
                                                        <h5 className="idea-h5">
                                                            {design.title}
                                                        </h5>
                                                    </div>
                                                );
                                            })}
                                        </Carousel>
                                    </PhotoProvider>
                                </Slide>
                                <div className="idea-p-wrapper">
                                    <p className="idea-p">
                                        In the final iteration, the team focused
                                        on refining the gamification mechanism
                                        by introducing trophies and badges as
                                        incentives. The badges are divided into
                                        four categories: community, reaction,
                                        medal, and premium, providing users with
                                        diverse motivational rewards.​
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
