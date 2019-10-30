import React from 'react'
import s from "./UsersList.module.css";
import usersPhoto from "../../../../assets/Image/UsersIcon.png";


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
                            <img src={u.photos.small !== null ? u.photos.small : usersPhoto}/>
                            {u.followed
                                ?
                                <button className={s.followedBtn} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                :
                                <button className={s.followedBtn} onClick={() => {
                                    props.follow(u.id)
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