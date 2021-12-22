import React from "react";
import Music from "./Music";
import News from "../News/News";

/*const higherOrderComponent = (PropsF) => {
    return <PropsF/>
}*/
/*function withSubscription(Music, size) {
    return class extends React.Component {
        render(props) {
            return <Music frt={size}/>;
        }
    }
}
const EnhancedComponent = withSubscription(News, " News");*/
let EnhancedComponent = (Music, size) => {
  return  () => { <Music frt={size}/>}

}



export default EnhancedComponent;