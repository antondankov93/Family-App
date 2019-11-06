import React from 'react'
import s from "./Users.module.css";
import usersPhoto from "../../../../assets/image/UsersIcon.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followingAPI} from "../../../../api/api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.paginator}>
                {pages.map(p => <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                )}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <section className={s.wrapper}>

                        <div className={s.logoAndStatus}>
                            <NavLink to={'/MainContent/InsideContent/Home-page/' + u.id}><img src={u.photos.small !== null ? u.photos.small : usersPhoto}/></NavLink>
                            {u.followed
                                ?
                                <button disabled={props.followingInProgress} className={s.followedBtn} onClick={() => {
                                    props.toggleFollowingProgress(true);
                                    followingAPI.getUnfollow(`follow/${u.id}`).then(data => {
                                            if(data.resultCode == 0){
                                                props.unfollow(u.id)
                                            }
                                        props.toggleFollowingProgress(false);
                                    });

                                }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress} className={s.followedBtn} onClick={() => {
                                    props.toggleFollowingProgress(true);
                                        followingAPI.getFollow(`follow/${u.id}`, {}).then(data => {
                                            if(data.resultCode == 0){
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false);

                                        });

                                }}>Follow</button>
                            }

                        </div>


                        <div className={s.UserAllContent}>
                            <div className={s.NameStatus}>
                                <p className={s.Name}>{u.name}</p>
                                <p className={s.Status}>{u.status}</p>
                            </div>

                            <div className={s.CountryCity}>
                                <p className={s.Country}>{'u.location.country'}</p>
                                <p className={s.City}>{'u.location.city'}</p>
                            </div>
                        </div>

                    </section>

                </div>)}
        </div>)
}

export default Users;