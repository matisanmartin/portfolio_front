import React from 'react';
import ProjectList from "./ProjectList";
import UserInfo from "./UserInfo";

class LeftBar extends React.Component {
    render() {
        return (
            <div>
                <div><UserInfo/></div>
                <div><ProjectList/></div>
            </div>
        );
    }
}

export default LeftBar;