import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import idea2_1 from "../assets/img/idea-2-1.jpg";
import idea2_2 from "../assets/img/idea-2-2.jpg";
import idea2_3 from "../assets/img/idea-2-3.jpg";
import idea2_4 from "../assets/img/idea-2-4.jpg";
import idea2_5 from "../assets/img/idea-2-5.jpg";
import idea3_2 from "../assets/img/idea-3-2.jpg";
import idea3_3 from "../assets/img/idea-3-3.jpg";
import idea3_4 from "../assets/img/idea-3-4.jpg";
import qrCode from "../assets/img/Team2A_QR.jpg";

import VideoPlayer from "../components/VideoPlayer";
import { ProjNavBar } from "../components/ProjNavBar";
import { PhotoProvider, PhotoView } from "react-photo-view";
import demoVid from "../assets/video/demo_video.mp4";

export const ChosenIdea = () => {
    const qrLink = "https://linktr.ee/MetPsyGroupA";

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

    const designs = [
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

    const videos = [
        {
            videoUrl:
                "/Users/angxing/Desktop/OIP/MetPsy-Project/project-website/public/demo.mp4",
            title: "Sample Video 1",
        },
    ];

    return (
        <>
            <ProjNavBar />
            <section class="py-5 idea-section">
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg align-items-center g-5">
                        <div className="col-10 col-sm-8 col-lg-10">
                            <br></br>
                            <h1 class="fw-light">Final Design</h1>
                            <br></br>
                            <p class="lead text-body-primary">
                                With 3 successful iterations, we unveil MetPsy's
                                ultimate solution. Personalized health and
                                wellness challenges are included. Points,
                                trophies, and badges are rewarded for completing
                                tasks and engaging in the forum.
                            </p>
                        </div>
                        <div className="col-lg-2">
                            <a href={qrLink}>
                                <img
                                    src={qrCode}
                                    class="qr-code-img"
                                    alt="QR Code"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="chosenIdea-div-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="idea-2-div-wrapper">
                                <span className="idea-tagline">
                                    Final Design
                                </span>
                                <PhotoProvider>
                                    <Carousel
                                        responsive={responsive}
                                        showDots
                                        infinite={true}
                                        className="owl-carousel owl-theme team-slider idea-carousel"
                                    >
                                        {designs.map((design, index) => {
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
                                                            src={design.imgUrl}
                                                            alt="Designs"
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
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="idea-2-div-wrapper">
                                <span className="idea-tagline">
                                    Prototype Demo
                                </span>

                                <div className="video-demo">
                                    {videos.map((video, index) => (
                                        <VideoPlayer
                                            key={index}
                                            videoUrl={demoVid}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
