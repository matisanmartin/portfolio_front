import React from "react";
import {Container, Row} from "reactstrap";

class UserInfo extends React.Component {
    render() {
        return (
            <Container>
                <img
                    src="https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/35301236_544534812607333_493625685160493056_n.jpg?_nc_cat=0&oh=a42be5db8375ea514f5d4c205b4c387b&oe=5BFD574C"
                    className="img-thumbnail"></img>
                <Row>Matias San Martin Acosta</Row>
                <Row>29 años</Row>
                <Row>msanmartinacosta@gmail.com</Row>
            </Container>
        );
    }
}

export default UserInfo;