import React from "react";
import {connect} from "react-redux";
import {follow, getUsersRed, setCurrentPage, togglefollowingProgress, unfollow,} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {

    componentDidMount() {

        /********************************/


/*        const test = (e) => (r) => () => e + r
        console.log(test(6)(4)())


        const test2 = (d) => () => (f) => () => d + f
        console.log(test2(34)()(11)())*/


        /*END*****END*****END*/


        this.props.getUsersRed(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsersRed(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   togglefollowingProgress={this.props.togglefollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage: setCurrentPage,
            togglefollowingProgress,
            getUsersRed,
        }
    ),
    withAuthRedirect,
)(UsersAPIComponent)




