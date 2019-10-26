import React from 'react'
import s from './UsersListItem.module.css'
import style from "../../Home-Page/MyPosts/Post.module.css";

const UserListItem = (props) => {
        return (
        <section className={s.wrapper}>

            <div className={s.logoAndStatus}>
                <img src={props.usersState.users.logoUrl}/>
                <button className={s.followedBtn}>Follow</button>
            </div>


            <div className={s.UserAllContent}>
                <div className={s.NameStatus}>
                    <p className={s.Name}>{props.usersState.fullName}</p>
                    <p className={s.Status}>{props.usersState.status}</p>
                </div>

                <div className={s.CountryCity}>
                    <p className={s.Country}>{props.usersState.country}</p>
                    <p className={s.City}>{props.usersState.city}</p>
                </div>
            </div>

        </section>
    )
}

export default UserListItem;