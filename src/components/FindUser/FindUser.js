import React from "react";
import UserBlock from "./userBlock";

const FindUser = (props) => {

    let usersState = props.usersState;
    let avaS = usersState.map(a => <UserBlock name = {a.name} ava = {a.ava} age = {a.age} city = {a.city}/>)

    return (
        <div>
            <div>User</div>
            <div>
                {avaS}

            </div>
        </div>
    )
}


export default FindUser;