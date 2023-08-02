import React from "react";
import { ReflectionNavBar } from "../components/ReflectionNavBar";
import { Timeline } from "../components/Timeline";
import { Container } from "react-bootstrap";
import d1_1 from "../assets/daily_img/Brief1_1.png";
import d5_1 from "../assets/daily_img/Brief5_1.jpeg";
import d5_2 from "../assets/daily_img/Brief5_2.jpeg";
import d6_1 from "../assets/daily_img/Brief6_1.png";
import d6_2 from "../assets/daily_img/Brief6_2.jpeg";
import d9_1 from "../assets/daily_img/Brief9_1.jpeg";
import d9_2 from "../assets/daily_img/Brief9_2.jpeg";
import { PhotoProvider, PhotoView } from "react-photo-view";

const items = [
    {
        title: "18 July 2023",
        cardTitle: "Team Daily Brief 1",
        cardDetailedText: (
            <div>
                <p>
                    <strong>Meeting and Project Kickoff:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            The day began with a face-to-face meetup between
                            team members from 2A and 2B. We engaged in
                            discussions regarding project assumptions and shared
                            our initial ideas.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Project Requirement Gathering:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            Following the meetup, we wasted no time and
                            initiated the project requirements gathering
                            process. The first set of questions was drafted and
                            promptly sent out to the client for their input.
                        </li>
                        <br></br>
                        <PhotoProvider>
                            <PhotoView src={d1_1}>
                                <img src={d1_1} alt="Daily Team Brief 1-1" />
                            </PhotoView>
                        </PhotoProvider>
                    </ul>
                </p>
                <p>
                    <strong>Communication Channels Set Up:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            To ensure seamless communication, we established
                            communication channels using Telegram and OneDrive.
                            These platforms will aid us in staying connected and
                            sharing project-related files efficiently.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Team Commitment:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            As a testament to our dedication, the team
                            collectively signed the Team Contract, reaffirming
                            our commitment to the project's success
                        </li>
                    </ul>
                </p>
            </div>
        ),
    },

    {
        title: "19 July 2023",
        cardTitle: "Team Daily Brief 2",
        cardDetailedText: (
            <div>
                <p>
                    <strong>Role Allocation:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            On Wednesday, July 19th, the team allocated specific
                            roles and responsibilities to each member for the
                            project.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Client Meeting with Ally:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            We had a productive meeting with Ally to delve
                            deeper into project requirements and understand the
                            limitations of the current application.
                        </li>
                        <br></br>
                        <li>
                            Following the meeting, we further refined and
                            divided each team member's roles and
                            responsibilities based on the insights gained.
                        </li>
                    </ul>
                </p>

                <p>
                    <strong>Current Project Responsibilities:</strong>
                </p>
                <p>
                    <p>
                        1. <strong>Figma Design:</strong>
                    </p>
                    The design of the Figma will be handled by Quan Xing and
                    Cheang Ming
                </p>
                <p>
                    <p>
                        2. <strong>Static Website Design:</strong>
                    </p>
                    The website design and development will be handled by Mirza
                    and Darren.
                </p>
                <p>
                    <p>
                        3. <strong>Poster Template:</strong>
                    </p>
                    The poster design will be handled by Ming Le.
                </p>
                <p>
                    <p>
                        2. <strong>Video Script:</strong>
                    </p>
                    The Videos and Dailies will be handled by Tan yi.
                </p>
                <p>
                    <strong>Daily Progress Update:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            As per our commitment to daily updates, team members
                            are consistently informing each other about their
                            progress on their respective assigned roles.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Today's Objectives:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            Each team member will continue working on their
                            assigned tasks and ensure that any hurdles are
                            promptly communicated to the rest of the team for
                            support and collaboration.
                        </li>
                    </ul>
                </p>
            </div>
        ),
    },
    {
        title: "20 July 2023",
        cardTitle: "Team Daily Brief 3",
        cardDetailedText: (
            <div>
                <p>
                    <strong>Gamification Concept Research:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            The team dedicated time to research and review
                            gamification concepts to ensure the implementation
                            of an engaging and effective system.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>3 Tier Membership for Point Reward System:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            We ideated a 3-tier membership plan to establish a
                            point reward system in both the forum and tracker.
                            These tiers offer different levels of access and
                            benefits to incentivize user participation
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Tracker Development:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            The tracker will focus on breath, sleep, and
                            activities, integrating the sweat coin idea to
                            provide users with points or cryptocurrency rewards.
                            This approach aims to motivate users to stay engaged
                            and encourage higher subscription upgrades.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Forum Enhancements:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            To improve user interaction, we will implement
                            features like liking, sharing, and other
                            interactions, allowing users to accumulate points
                            for increased engagement
                        </li>
                        <br></br>
                        <li>
                            A level system will also be introduced to further
                            incentivize users to participate actively.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Next Steps:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            Our next steps involve finalizing the 3-tier
                            subscription system, integrating the point reward
                            system into the forum and tracker, and conducting
                            user testing to ensure a seamless user experience.
                        </li>
                    </ul>
                </p>
            </div>
        ),
    },
    {
        title: "21 July 2023",
        cardTitle: "Team Daily Brief 4",
        cardDetailedText: (
            <div>
                <p>
                    <strong>Meeting with Ally - Prototypes Discussion:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            On Friday, July 21st, the team held a meeting with
                            Ally to discuss the team's prototypes.
                        </li>
                        <br></br>
                        <li>
                            During the meeting, Ally provided notable feedback
                            for us to improve upon.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Feedback Highlights:</strong>
                </p>
                <p>
                    1. <strong>Inclusivity for All Users</strong>
                </p>
                <p>
                    One concern raised was how to include users who may have
                    relatively lesser experience in maintaining a healthy
                    lifestyle. It’s essential to ensure that these users are not
                    disadvantaged when participating in challenges to earn
                    points
                </p>
                <p>
                    2. <strong>Gamification and Commercial Constraints</strong>
                </p>
                <p>
                    While appreciating the character idea for gamification, we
                    must also consider commercial constraints. Ally utilizes
                    no-code products like AppMySite, myCred, WordPress, and
                    bbPress to build his prototype app. Thus, any gamification
                    recommendations need to align with these existing
                    technologies.
                </p>
                <p>
                    3. <strong>Existing Tech Stack</strong>
                </p>
                <p>
                    Ally’s current tech stack revolves around WordPress with
                    plugins, and he prefers Quantimodo, which seamlessly
                    integrates with WordPress.
                </p>
                <p>
                    4. <strong>Modular Learning Approach</strong>
                </p>
                <p>
                    Ally expressed an interest in the modular design, allowing
                    users to pick and choose specific lessons based on their
                    preferences, enabling a personalized learning experience.
                </p>
                <p>
                    5. <strong>Bot Name Consideration</strong>
                </p>
                <p>
                    The use of the “MADD” acronym may not be suitable for a
                    mental health app, and it might require reconsideration.
                </p>
                <p>
                    <strong>Next Steps:</strong>
                    <p>
                        <ul>
                            <li>
                                After the meeting, the team decided to conduct a
                                rapid sprint to address the feedback provided by
                                Ally.
                            </li>
                        </ul>
                    </p>
                </p>
            </div>
        ),
    },
    {
        title: "24 July 2023",
        cardTitle: "Team Daily Brief 5",
        cardDetailedText: (
            <div>
                <p>
                    <strong>
                        Project Updates and Client Meeting Highlights:
                    </strong>
                </p>
                <p>
                    <strong>Figma-to-WordPress Conversion:</strong>
                    <ul>
                        <li>
                            Quan Xing introduced a way to convert our Figma
                            designs to a WordPress template, which could address
                            Ally's concern about no-code development for the
                            application.
                        </li>
                        <br></br>
                        <li>
                            However, we need to check with Ally to confirm the
                            feasibility of this solution and whether he prefers
                            to stick with the original application design.
                        </li>
                        <br></br>
                        <PhotoProvider>
                            <PhotoView src={d5_1}>
                                <img src={d5_1} alt="Daily Team Brief 5-1" />
                            </PhotoView>
                        </PhotoProvider>
                    </ul>
                    <br></br>
                    <strong>Work Split for Risk Mitigation</strong>. To mitigate
                    risks, we divided the team's efforts into two directions:
                    <ul>
                        <li>
                            One team will proceed with the Figma design,
                            ensuring previous work is utilized effectively.
                        </li>
                        <br></br>
                        <li>
                            The other team will research WordPress gamification
                            plugins as a safety net in case the
                            Figma-to-WordPress conversion is not viable.
                        </li>
                    </ul>
                    <br></br>
                    <strong>
                        Inclusivity for Users with Mental Health Issues:
                    </strong>
                    .
                    <ul>
                        <li>
                            Considering Ally's concern about users with mental
                            health issues, Mirza recommended having a
                            questionnaire in the initial account setup to offer
                            a tailored experience based on their mental health.
                            We will discuss this option's viability with Ally.
                        </li>
                    </ul>
                </p>

                <p>
                    <strong>Poster Update</strong>
                    <ul>
                        <li>
                            The team conducted a review of the poster designed
                            by Ming Le.
                        </li>
                        <br></br>
                        <li>
                            It was agreed that some parts of the poster were too
                            wordy, and modifications will be made accordingly.
                        </li>
                        <br></br>
                        <li>
                            Further feedback will be sought from the Teaching
                            Assistants to enhance the poster's overall
                            effectiveness.
                        </li>
                        <br></br>
                        <PhotoProvider>
                            <PhotoView src={d5_2}>
                                <img src={d5_2} alt="Daily Team Brief 5-2" />
                            </PhotoView>
                        </PhotoProvider>
                    </ul>
                </p>
            </div>
        ),
    },
    {
        title: "25 July 2023",
        cardTitle: "Team Daily Brief 6",
        cardDetailedText: (
            <div>
                <p>
                    <strong>Project Progress and Gamification Research:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            Following up on the discussions from Monday's
                            meeting, the team has been actively working on the
                            development of the Figma designs and researching
                            gamification plugins for WordPress.
                        </li>
                        <br></br>
                        <li>
                            In our pursuit of gamification goals, which include
                            implementing a points system for rewards tracking
                            and badges, we identified some promising
                            gamification plugins for WordPress. These plugins
                            could potentially be the solution Ally needs to
                            gamify his application effectively.
                        </li>

                        <PhotoProvider>
                            <PhotoView src={d6_1}>
                                <img src={d6_1} alt="Daily Team Brief 6-1" />
                            </PhotoView>
                        </PhotoProvider>

                        <br></br>
                        <br></br>
                        <PhotoProvider>
                            <PhotoView src={d6_2}>
                                <img src={d6_2} alt="Daily Team Brief 6-2" />
                            </PhotoView>
                        </PhotoProvider>
                    </ul>
                </p>
                <p>
                    <strong>Poster Update:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            The team diligently addressed the feedback received
                            during the previous meeting and proceeded to update
                            the poster design accordingly.
                        </li>
                        <br></br>
                        <li>
                            The main focus of the updates was on the background
                            information, where we streamlined the content to
                            include only the key points. This adjustment aims to
                            improve the poster's overall clarity and
                            readability.
                        </li>
                    </ul>
                </p>
            </div>
        ),
    },
    {
        title: "26 July 2023",
        cardTitle: "Team Daily Brief 7",
        cardDetailedText: (
            <div>
                <p>
                    <strong>Progress Update Meeting with Ally:</strong>
                </p>
                <p>
                    Today, our team had a productive meeting with Ally to
                    discuss the current status of the project and present our
                    gamification ideas.
                </p>
                <p>
                    <strong>Gamification Ideas:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            During the meeting, we shared the various
                            gamification concepts with Ally we discussed as a
                            team the day before.
                        </li>
                        <br></br>
                        <li>
                            He expressed a strong interest in the idea of Peer
                            to Peer currency transfers, as it fosters a sense of
                            community among users.
                        </li>
                        <br></br>
                        <li>
                            Framing activities as challenges also resonated with
                            Ally, as it encourages active user participation.
                        </li>
                        <br></br>
                        <li>
                            We discussed displaying these challenges on the
                            modular page to allow users to track their progress
                            and completed challenges efficiently.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Alignment with Ally's Current Tech Stack:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            We learned that Ally is using BBPress and
                            Memberpress alongside myCred for his prototype
                            application.
                        </li>
                        <br></br>
                        <li>
                            Our recommendation of the myCred plugin aligns well
                            with his existing setup.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Poster Design Feedback:</strong>
                </p>
                <p>
                    <ul>
                        <li>Implement color coding for each item.</li>
                        <br></br>
                        <li>Standardize the shapes for a cohesive look.</li>
                        <br></br>
                        <li>
                            Reduce excessive white spaces to optimize space
                            utilization.
                        </li>
                        <br></br>
                        <li>
                            Enhance readability for better user comprehension.
                        </li>
                    </ul>
                </p>
            </div>
        ),
    },
    {
        title: "27 July 2023",
        cardTitle: "Team Daily Brief 8",
        cardDetailedText: (
            <div>
                <p>
                    <strong>
                        Poster Redesign and Teacher Assistants Consultation:
                    </strong>
                </p>
                <p>
                    Following the feedback received from Wednesday's meeting,
                    the team diligently worked on the poster redesign using
                    Canva. The new iteration focused on enhancing various
                    aspects:
                </p>
                <ul>
                    <li>
                        Better Use of White Spaces: The team ensured that the
                        poster design optimized white spaces for improved visual
                        appeal and clarity.
                    </li>
                    <li>
                        Cleaner Display of Content: The content was presented in
                        a cleaner and more organized manner, facilitating easy
                        comprehension.
                    </li>
                    <li>
                        Reduced and Cleaner Usage of Color Tones: The team made
                        adjustments to color tones to achieve a cohesive and
                        aesthetically pleasing design.
                    </li>
                    <li>
                        Improved Readability: Emphasis was given to readability
                        to ensure the poster effectively conveys its message.
                    </li>
                </ul>
                <p>
                    Before proceeding further, the team will consult with the
                    Teacher Assistants on Friday to gather additional feedback
                    and ensure the poster is headed in the right direction.
                </p>
                <p>
                    <strong>Research on Badges and Figma Prototypes:</strong>
                </p>
                <p>
                    In response to Ally's interest in badges, the team conducted
                    thorough research on badges as a gamification element. Four
                    main categories of badges were identified:
                </p>
                <ul>
                    <li>
                        Community: Focused on community engagement and fostering
                        a sense of belonging among users.
                    </li>
                    <li>
                        Reaction: Associated with users' achievements and
                        interactions within the application.
                    </li>
                    <li>
                        Medal: Aligned with users' accomplishments and
                        milestones.
                    </li>
                    <li>
                        Premium: Designed to offer potential paid perks for
                        premium users, enhancing user engagement.
                    </li>
                </ul>
                <p>
                    The team then incorporated the display of badges into the
                    Figma prototypes, enriching the user experience and
                    encouraging engagement.
                </p>
                <p>
                    <strong>Next Meeting Goals:</strong>
                </p>
                <p>
                    For the upcoming meeting with Ally on Friday, the team aims
                    to:
                </p>
                <ul>
                    <li>
                        Present the categories of badges for Ally's feedback and
                        validation.
                    </li>
                    <li>
                        Finalize the gamification plugin selection for seamless
                        implementation.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: "28 July 2023",
        cardTitle: "Team Daily Brief 9",

        cardDetailedText: (
            <div>
                <p>
                    <strong>
                        Figma Prototypes Presentation and Client Feedback
                    </strong>
                </p>
                <p>
                    In today's meeting, the team showcased the Figma prototypes,
                    incorporating the badges we had developed. We received
                    positive feedback from Ally regarding various aspects of the
                    design.
                </p>
                <br></br>
                <PhotoProvider>
                    <PhotoView src={d9_1}>
                        <img src={d9_1} alt="Daily Team Brief 9-1" />
                    </PhotoView>
                </PhotoProvider>

                <p>
                    <strong>Badge Design and Customization:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            Ally liked the badge designs and appreciated the
                            idea of allowing moderators to create custom badges,
                            fostering a sense of ownership and engagement.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Points Display and Progress Tracking:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            Ally also expressed approval for the display of
                            overall points and user progress within the
                            application, recognizing its potential to motivate
                            users.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>
                        Application Design and Feedback Incorporation:
                    </strong>
                </p>
                <p>
                    <ul>
                        <li>
                            Ally complimented the team on the overall
                            application design and acknowledged that we had
                            considered and incorporated his previous feedback
                            effectively.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Redesigned Poster - Third Iteration:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            Following valuable feedback from both the client and
                            our teaching assistants, we worked on a third
                            iteration of the poster design.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Cleaner Design and Title Size Adjustment:</strong>
                </p>
                <p>
                    <ul>
                        <PhotoProvider>
                            <PhotoView src={d9_2}>
                                <img src={d9_2} alt="Daily Team Brief 9-2" />
                            </PhotoView>
                        </PhotoProvider>
                        <li>
                            Upon presenting the latest poster design to Ally, he
                            praised its cleanliness compared to the initial
                            version.
                        </li>
                        <br></br>
                        <li>
                            However, Ally suggested reducing the title size to
                            provide more space for content, improving
                            readability and impact.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Next Steps:</strong>
                </p>
                <p>
                    <ul>
                        <li>
                            Our next steps involve finalizing the poster design
                            with the title size adjustment and preparing the
                            requested PDF outlining gamification directions.
                        </li>
                    </ul>
                </p>
            </div>
        ),
    },
    {
        title: "31 July 2023",
        cardTitle: "Team Daily Brief 10 ",

        cardDetailedText: (
            <div>
                <p>
                    <strong>
                    Reviewed website and poster
                    </strong>
                </p>
                <p>
                <ul>
                        <li>
                        Went through the website to identify any potential 
                        improvements and areas of refinement
                        </li>
                        <br></br>
                        <li>
                        Examined the poster layout and content to assess its effectiveness and visual appeal.
                        </li>
                    </ul>
                </p>
                <br></br>
                <p>
                    <strong>
                    Brainstormed "Why We're Proud" Section:
                    </strong>
                </p>
                <p>
                <ul>
                        <li>
                        Held a team discussion to determine the key points 
                        and achievements that make us proud of the project.
                        </li>
                        <br></br>
                        <li>
                        Discussed the specific content and messaging to be included in the 
                        "Why We're Proud" section of the website.
                        </li>
                    </ul>
                </p>
                <br></br>
                <p>
                    <strong>
                    Upcoming Tasks:
                    </strong>
                </p>
                <p>
                <ul>
                        <li>
                        Finalize website updates and review the "Why We're Proud" section 
                        with the team before publishing.
                        </li>
                        <br></br>
                        <li>
                        Implement subheadings into the poster design and review the content flow for clarity.
                        </li>
                        <br></br>
                        <li>
                        Plan for the next team meeting to track progress and address any new challenges that may arise.
                        </li>
                    </ul>
                </p>
                
            </div>
        ),
    },
    {
        title: "1 August 2023",
        cardTitle: "Team Daily Brief 11 ",

        cardDetailedText: (
            <div>
                <p>
                    <strong>
                    Website Feedback
                    </strong>
                </p>
                <p>
                <ul>
                        <li>
                        Aligned LinkedIn with the user's profile on the website
                        </li>
                        <br></br>
                        <li>
                        Updated the front page icon and included more detailed information about the project accomplishments.
                        </li>
                        <li>
                        Added subheaders to the "Proud" page for better organization and provided a more direct explanation of why we are proud.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>
                    Poster Feedback:
                    </strong>
                </p>

                <p>
                <ul>
                        <li>
                            Expanded on the proposed solution on the poster to provide more clarity.
                        </li>
                        <br></br>
                        <li>
                            Incorporated bullet points to highlight the benefits of gamification. Updated the front page icon and included more detailed information about the project accomplishments.
                        </li>
                        <li>
                            Removed unnecessary content related to the team exploration journey.
                        </li>
                    </ul>
                </p>

                <p>
                    <strong>
                    Action Item:
                    </strong>
                </p>

                <p>
                <ul>
                        <li>
                        Finalized the poster based on received feedback.
                        </li>
                        <br></br>
                        <li>
                            Reviewed and updated the "Proud" page and home page on the website to reflect the improvements.                        
                        </li>
                    </ul>
                </p>
            </div>
        ),
    },
];
export const TeamBriefs = () => {
    return (
        <>
            <ReflectionNavBar />
            <div className="tb-div-wrapper">
                <Container>
                    <h2 className="mb-4">Daily Team Briefs</h2>
                    <Timeline items={items} />
                </Container>
            </div>
        </>
    );
};
