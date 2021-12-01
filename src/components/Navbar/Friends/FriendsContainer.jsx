import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";



const MapStateToProps = (state) => {
    return {
        ded: state.sidebar.friendsDate
    }
}




const FriendsContainer = connect(MapStateToProps)(Friends);

export default FriendsContainer;