import React from "react";
import Hero from "../components/Hero";
import Components from "../components/Col"

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pupster</h1>
        <h2>They're the Good Boys and Girls</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
        <Col size="md-12">
                        <h1>Welcome To Pupster!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            We love dogs, don't you? Find some good boys and girls in your area and see if they match with you!
            </p>
                        <p>
                            DOGS DOGS DOGS DOGS DGOS DOGS DOGS DOGS
            </p>
                        <p>
                            PUPPERS PUPPERS PUPPERS PUPPERS PUPPERS PUPPERS
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
