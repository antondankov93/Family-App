import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../../common/preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const  ProfileInfo = (props) => {

    if(!props.profile){
        return(
            <Preloader/>
        )
    }

    return (
        <section className={s.wrapper}>
            <img className={s.face}
                 src={props.profile.photos.large !== null ? props.profile.photos.small : "https://img.icons8.com/cute-clipart/100/000000/angry-face-meme.png"}/>

            <div className={s.main}>
                <div className={s.topMain}>
                    <div className={s.name}>{props.profile.fullName}</div>

                    <div className={s.status}>
                        <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk}/>
                    </div>

                </div>
                <div className={s.bottomMain}>
                    <div className={s.aboutMe}>{props.profile.aboutMe}</div>
                    <div className={s.sideInfo}>
                        <div className={s.contacts}>shkjjkhjk</div>
                        <div className={s.lookingForAJob}>Ищу работу: {props.profile.lookingForAJob ? "Да" : "Нет"}</div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default ProfileInfo;
