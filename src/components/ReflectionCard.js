import React from "react";
import Card from "react-bootstrap/Card";

export const ReflectionCard = ({ title, text, imgURL }) => {
    return (
        <div className="reflection-card">
            <Card>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title className="reflection-card-title">
                        {title}
                    </Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
