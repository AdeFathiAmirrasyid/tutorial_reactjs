import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import YouTubeComp from "../../../component/youtube/YouTubeComp";

export default class YouTubeCompPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>YouTube Component</h1>
          <hr />
          <Col>
            <YouTubeComp title="React Js" desc="Belajar React js" />
          </Col>
          <Col>
            <YouTubeComp title="Kotlin" desc="Belajar Kotlin" />
          </Col>
          <Col>
            <YouTubeComp title="React Native" desc="Belajar React Native" />
          </Col>
          <Col>
            <YouTubeComp title="Java" desc="Belajar Java" />
          </Col>
          <Col>
            <YouTubeComp />
          </Col>
        </Row>
      </Container>
    );
  }
}
