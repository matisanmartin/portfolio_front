import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";

class ProjectList extends React.Component {
    render() {
        return(
            <ListGroup>
                <ListGroupItem>Enlaces</ListGroupItem>
                <ListGroupItem>32 cosas que hacia mi abuelo</ListGroupItem>
                <ListGroupItem>Secuencias</ListGroupItem>
            </ListGroup>
        );
    }
}

export default ProjectList