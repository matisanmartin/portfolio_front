import React from "react";

class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <div><UserProfilePicture/></div>
                <div><UserDescription/></div>
            </div>

        );
    }
}

export default UserInfo;