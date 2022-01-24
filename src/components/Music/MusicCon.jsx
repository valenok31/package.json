import React from "react";
import Music from "./Music";
import News from "../News/News";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*const higherOrderComponent = (PropsF) => {
    return <PropsF/>
}*/


const MusicCon = () => {
    return <Music />
}

//let AuthRedirectComponent = withAuthRedirect(MusicCon);


//export default MusicCon;

export default compose(
    //withAuthRedirect
    withAuthRedirect
)(MusicCon)
