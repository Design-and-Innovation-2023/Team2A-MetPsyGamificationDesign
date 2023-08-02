import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase } from "react-bootstrap-icons";
import { Row } from "react-bootstrap";

export const Timeline = ({ items }) => {
    return (
        <Row>
            <VerticalTimeline lineColor="orange">
                {items.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={item.title}
                        contentStyle={{ borderTop: "4px solid orange" }}
                        iconStyle={{
                            background: "rgb(255, 165, 0)",
                            color: "#fff",
                        }}
                        icon={<Briefcase />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {item.cardTitle}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            {item.cardSubtitle}
                        </h4>
                        <p style={{ color: "#36454F" }}>
                            {item.cardDetailedText}
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </Row>
    );
};
