import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div>
                <img className={s.ava_home_blok}
                     src='https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/San%20Francisco_1.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.lookingForAJob ? <img src='https://gtn-pravda.ru/static/2016/02/ishhu-rabotu.jpg'/> :
                        <img src='http://memesmix.net/media/created/rqp1bb.jpg'/>}
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;