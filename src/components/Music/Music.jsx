import React from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {f_addPostActionCreator, f_updateNewPostTextActionCreator} from "../../redux/dialogs-reducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
const Music = () => {
    return (
        <div>
asdsadsa
        </div>
    )

}

let AuthRedirectComponent = withAuthRedirect(Music);

const Musicw = connect(mapStateToProps)(AuthRedirectComponent);

export default Musicw;