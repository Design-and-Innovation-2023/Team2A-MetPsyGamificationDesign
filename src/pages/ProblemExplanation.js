import React from "react";
import tw from "twin.macro";
import MainFeature2 from "../components/TwoColWithTwoHorizontalFeaturesAndButton.js";
import prototypeIllustrationImageSrc from "../assets/img/prototype-illustration.svg";
import IconPeopleFill from "../components/misc/PeopleIcon.js";
import IconFire from "../components/misc/FireIcon.js";
import { ProjNavBar } from "../components/ProjNavBar";

export const ProblemExplanation = () => {
    const HighlightedText = tw.span`text-sky-500`;

    return (
        <>
            <ProjNavBar />
            <MainFeature2
                heading={
                    <>
                        MetPsy's <HighlightedText>Gamification</HighlightedText>{" "}
                        System
                    </>
                }
                imageSrc={prototypeIllustrationImageSrc}
                showDecoratorBlob={false}
                features={[
                    {
                        Icon: IconPeopleFill,
                        title: "Engagement",
                        description:
                            "Gamification should enhances user engagement by making tasks and activities more enjoyable, interactive, and rewarding.",
                        iconContainerCss: tw`bg-green-300 text-green-800`,
                    },
                    {
                        Icon: IconFire,
                        title: "Motivation",
                        description:
                            "Gamification should boosts user motivation with proper incentive structure such as points and badges for completing tasks and challenges.",
                        iconContainerCss: tw`bg-red-300 text-red-800`,
                    },
                ]}
            />
        </>
    );
};
