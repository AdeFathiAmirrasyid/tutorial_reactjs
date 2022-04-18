import React from "react";
import { Card } from "react-bootstrap";

const YouTubeComp = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mt-3 mb-3">
        <Card.Img variant="top" src="https://placeimg.com/286/180/tech" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

YouTubeComp.defaultProps = {
  title: "Laravel",
  desc: "Belajar laravel",
};
export default YouTubeComp;
