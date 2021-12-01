import FindUser from "./FindUser";
import {connect} from "react-redux";
import React from "react";

const mapStateToProps = (state) => {

    return {
        usersState: state.findUserPage.usersDate,
    }
}

const FindUserContainer = connect(mapStateToProps)(FindUser);

export default FindUserContainer;
