import React from "react";
import {Container, Row, Col} from 'reactstrap'

class Content extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="3">
                        <Row>userInfo</Row>
                        <Row>Project</Row>
                    </Col>
                    <Col xs="9">ProjectContent</Col>
                </Row>
            </Container>
        )
    }
}

export default Content;