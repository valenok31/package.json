import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersRed} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUsersRed(userId);

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = (props) => {
    if(!props.isAuth) return <Redirect to='/login'/>;
    return <ProfileContainer {...props}/>
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUsersRed,})(WithUrlDataContainerComponent);