import React from "react";
import {Col, Container, Row} from 'reactstrap'
import UserInfo from "./UserInfo";
import ProjectContent from "./ProjectContent";
import ProjectList from "./ProjectList";

class Content extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={3}>
                        <Row><UserInfo/></Row>
                        <Row><ProjectList/></Row>
                    </Col>
                    <Col xs={9}><ProjectContent/></Col>
                </Row>
            </Container>
        )
    }
}

export default Content;