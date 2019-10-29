import React from 'react'
import s from './UsersList.module.css'


const UsersList = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                logoUrl: "https://img.icons8.com/dusk/128/000000/walter-white.png",
                followed: false,
                fullName: "Anton",
                status: "Hey i'm using this shit",
                location: {country: "USA", city: "Charlotte"}
            },
            {
                id: 2,
                logoUrl: "https://img.icons8.com/dusk/128/000000/darth-vader.png",
                followed: true,
                fullName: "Dmitriy",
                status: "Say Hello",
                location: {country: "Russia", city: "Urypinsk"}
            },
            {
                id: 3,
                logoUrl: "https://img.icons8.com/dusk/128/000000/futurama-zoidberg.png",
                followed: false,
                fullName: "Fedor",
                status: "CAVABANGA!!!",
                location: {country: "Russia", city: "Moskow"}
            },
        ])
    }
    return (
        props.users.map(u => <div key={u.id} >
            <section className={s.wrapper}>

                <div className={s.logoAndStatus}>
                    <img src={u.logoUrl}/>
                        {u.followed
                            ?
                            <button className={s.followedBtn} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            :
                            <button className={s.followedBtn} onClick={() => {props.follow(u.id)}}>Follow</button>
                        }

                </div>


                <div className={s.UserAllContent}>
                    <div className={s.NameStatus}>
                        <p className={s.Name}>{u.fullName}</p>
                        <p className={s.Status}>{u.status}</p>
                    </div>

                    <div className={s.CountryCity}>
                        <p className={s.Country}>{u.location.country}</p>
                        <p className={s.City}>{u.location.city}</p>
                    </div>
                </div>

            </section>

        </div>)
    )
}


export default UsersList;