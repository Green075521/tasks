import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col>
                        <img
                            src="../assets/images/pet-ada.jpg"
                            alt="A cat behind a computer monitor peeking over the monitor"
                        />
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        >
                            {" "}
                        </div>
                    </Col>
                    <Col>
                        <h1>Hello, World!</h1>
                        <p>
                            This is my <s>computer technician</s> cat, Suzie.
                            Here are some fun facts about her:
                        </p>
                        <ul style={{ listStylePosition: "inside" }}>
                            <li>She likes to eat vanilla ice cream</li>
                            <li>
                                She does not like her cat bed but will use
                                nearly any other object as a cat bed
                            </li>
                            <li>
                                Her cat tree is behind my computer chair so she
                                can join me for video calls
                            </li>
                        </ul>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <p>by: Nathan Green</p>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        >
                            {" "}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
